module.exports = app => {
  class IndexController extends app.Controller {
    * index() {
      this.ctx.body = 'Hello world';
    }
  }
  return IndexController;
};