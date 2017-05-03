module.exports = app => {
  class LoginController extends app.Controller {
    //curl -X POST http://localhost/login --data '{"mobile":"18109316549","pwd":"123321"}' --compressed
    * index() {
      const { ctx, app } = this;
      //const { mobile, pwd } = ctx.request;
      const { mobile, pwd } = ctx.params;
      ctx.body = yield ctx.model.member.find({mobile:mobile,pwd:pwd},{'_id':0,'mobile':1});
      
      let payload = { mobile: 'bar',role:''}
      const accesstoken = app.jwt.sign({ mobile: 'bar',role:''},app.config.jwt.secret);
    }

  }
  return LoginController;
};