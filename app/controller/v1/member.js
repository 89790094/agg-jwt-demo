module.exports = app => {
  class MemberController extends app.Controller {
    * index() {
      const { ctx, app } = this;
      ctx.body = {};
    }
  }
  return MemberController;
};