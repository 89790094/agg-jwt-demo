
module.exports = app => {
  class AuthController extends app.Controller {
    //curl -X POST http://127.0.0.1:7001/auth -d '{"mobile":"18109316549","password":"liudong"}' -H 'Content-Type: application/json;charset=UTF-8' --compressed
    * index() {
      const { ctx, app } = this;
      const { mobile, password } = ctx.request.body;
      const { _id, pwd, status } = yield ctx.model.member.findOne({ mobile: mobile }, { 'pwd': 1, 'status': 1 });
      if (!_id) {
        ctx.status = 401;
        ctx.body = { message: '用户名错误' };
      } else if (!status) {
        ctx.status = 401;
        ctx.body = { message: '用户状态异常' };
      } else if (this.md5(password) !== pwd) {
        ctx.status = 401;
        ctx.body = { message: '密码错误' };
      } else {
        //update logintime
        const ukey = `uid:${_id}`;
        let lat = Date.now();
        yield ctx.model.member.updateOne({ _id: _id }, { $set: { lastAt: lat } }, { upsert: true });
        let payload = { _uid: _id };
        let accesstoken = app.jwt.sign(payload, app.config.jwt.secret);
        //write to redis
        let udate = {
          token: accesstoken,
          exp: lat
        }
        if(yield app.redis.exists(ukey)){
          yield app.redis.del(ukey);
        }
        yield app.redis.hmset(ukey, udate);
        yield app.redis.expire(ukey, 7 * 24 * 60 * 60);
        ctx.rotateCsrfSecret();
        ctx.status = 200;
        ctx.body = { token: accesstoken };
      }
    }

    * create(){
      const { ctx, app } = this;
      const { mobile, password } = ctx.request.body;

    }

    * destroy(){
      const { ctx, app } = this;
      const { _id } = ctx.request.body;
      
    }
  }
  return AuthController;
};