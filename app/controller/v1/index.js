module.exports = app => {
  class IndexController extends app.Controller {
    * index() {
      const { ctx, app } = this;
      ctx.body = 'System Api';
    }
  }
  return IndexController;
};