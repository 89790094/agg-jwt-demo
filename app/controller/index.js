module.exports = app => {
  class IndexController extends app.Controller {
    * index() {
        const {ctx} = this;    
        ctx.body = 'Hello world';
    }
  }
  return IndexController;
};