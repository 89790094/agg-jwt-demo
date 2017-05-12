const path = require('path');
module.exports = () => {
    return function* (next) {
        const { app } = this;
        if (this.path === '/api/v1/') return yield next;
        //curl -X GET http://127.0.0.1:7001//api/v1/member -H 'Content-Type: application/json;charset=UTF-8' -H 'x-access-token:<token>' --compressed
        const token = this.request.token || this.query.token || this.get('x-access-token');
        if (token) {
            try {
                let { _uid } = app.jwt.verify(token, app.config.jwt.secret);
                let key = `uid:${_uid}`;
                let user = yield app.redis.hgetall(key);
                if (user) {
                    //if((Date.now()-user.exp) <= 7*24*60*60*1000){}
                    if (yield app.redis.ttl(key) < 24 * 60 * 60) {
                        let lat = Date.now();
                        //updata logintime
                        yield ctx.model.member.updateOne({ _id: _uid }, { $set: { lasttime: lat } }, { upsert: true });
                        //Rewrite to redis
                        let userdate = {
                            token: token,
                            exp: lat
                        }
                        yield app.redis.del('uid:' + _uid);
                        yield app.redis.hmset('uid:' + _uid, userdate);
                        yield app.redis.expire('uid:' + _uid, 7 * 24 * 60 * 60);
                    }
                    yield next;
                } else {
                    this.status = 401;
                    this.body = { message: 'token失效' };
                }
            } catch (err) {
                this.status = 401;
                this.body = { message: 'token无效' };
            }
        } else {
            this.status = 401;
            this.body = { message: '用户未授权' };
        }
    }
}