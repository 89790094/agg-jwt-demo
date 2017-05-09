
module.exports = app => {
  class AuthController extends app.Controller {
    //curl -X POST http://127.0.0.1:7001/auth -d '{"mobile":"18109316549","password":"liudong"}' -H 'Content-Type: application/json;charset=UTF-8' --compressed
    * index() {
      const { ctx, app } = this;
      const { mobile, password } = ctx.request.body;
      let { _id, pwd } = yield ctx.model.member.findOne({ mobile: mobile, status: 1 }, { 'pwd': 1 });
      if (!_id) {
        ctx.status = 401;
        ctx.body = { message: '用户名错误' };
      } else {
        if (this.md5(password) !== pwd) {
          ctx.status = 401;
          ctx.body = { message: '密码错误' };
        } else {
          let payload = { userid: _id, exp: new Date().getTime() + 7 * 24 * 60 * 60 * 1000 };
          const accesstoken = app.jwt.sign(payload, app.config.jwt.secret);
          //ctx.cookies.set('token', accesstoken, { expires: new Date().getTime() + 365 * 24 * 60 * 60 * 1000 });
          ctx.status = 200;
          ctx.body = { token: accesstoken };
        }
      }
    }
  }
  return AuthController;
};