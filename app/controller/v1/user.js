module.exports = app => {
  class UserController extends app.Controller {
    * index() {
      const { ctx, app } = this;
      ctx.body = 'User Api';
    }
  }
  return UserController;
};