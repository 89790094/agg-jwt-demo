module.exports = app => {
  class IndexController extends app.Controller {
    * index() {
      const { ctx, app } = this;
      ctx.status = 200;
      ctx.body = 'API List';
    }
  }
  return IndexController;
};