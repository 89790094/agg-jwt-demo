module.exports = app => {
  class IndexController extends app.Controller {
    * index() {
      const { ctx, app } = this;
      ctx.body = 'API List';
    }
  }
  return IndexController;
};