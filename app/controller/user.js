module.exports = app => {
  class UserController extends app.Controller {
    * index() {
      const { ctx, app } = this;
      ctx.body = 'Index';
    }

    * login() {
      const { ctx, app } = this;
      const token = app.jwt.sign({ foo: 'bar' }, app.config.jwt.secret);
      ctx.body = 'Login';
    }
    
  }
  return UserController;
};