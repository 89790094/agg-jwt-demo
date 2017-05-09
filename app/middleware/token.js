const path = require('path');

module.exports = (app) => {
    return function* (next) {
        console.log(this.path);
        if (this.path === '/api/v1/') return yield next;
        //curl -X POST http://127.0.0.1:7001/auth -d '<data>' -H 'Content-Type: application/json;charset=UTF-8' -H 'x-access-token:<token>' --compressed
        let token = this.request.token || this.query.token || this.get('x-access-token');
        if (token) {
            try {
                const {_id} = app.jwt.verify(token, app.config.jwt.secret);
                
            } catch (err) {
                this.body = { message: 'token无效' };
            }
            yield next;
        } else {
            this.status = 401;
            this.body = { message: '用户未授权' };
        }
    }
}