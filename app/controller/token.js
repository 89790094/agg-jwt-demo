module.exports = app => {
  class TokenController extends app.Controller {
    * index() {
      const { ctx, app } = this;
      const accesstoken = app.jwt.sign({ foo: 'bar' }, app.config.jwt.secret);
      console.log(accesstoken);
      ctx.body = 'Fetch AccessToken';
    }

    * login() {
      const { ctx, app } = this;
      //const accesstoken = app.jwt.sign({ foo: 'bar' }, app.config.jwt.secret);
      ctx.body = 'Login';
    }
    
  }
  return TokenController;
};