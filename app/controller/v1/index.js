module.exports = app => {
  class IndexController extends app.Controller {
    * index() {
      const { ctx, app } = this;
      let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiI1OTEwMjM4MzkzMTQwMGQ2YzdkZjU1MDYiLCJleHAiOjE0OTQ5MTc0NzI2OTEsImlhdCI6MTQ5NDMxMjY3Mn0.sWDRBhtLVagrBfqJss-8Sb3dXX11cCfqWIuZ54qqBmY';
      console.log(app.jwt)
      try {
        const tk = app.jwt.verify(token, app.config.jwt.secret);
        ctx.body = tk;
      } catch (err) {
        ctx.body = { message: 'token无效' };
      }
      //ctx.body = '{API List}';
    }
  }
  return IndexController;
};