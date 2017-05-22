module.exports = app => {
  class User extends app.Service {
    * mobile(_id) {
      let { mobile } = yield this.ctx.model.member.findOne({ _id: _id }, { _id: 0, mobile: 1 });
      return mobile;
    }

  }
  return User;
};