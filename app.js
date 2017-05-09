const crypto = require('crypto');
module.exports = app => {
    //基类
    class CustomController extends app.Controller {
        get user() {
            return this.ctx.session.user;
        }
        md5(str) {
            let md5 = crypto.createHash('md5');
            md5.update(str);
            return md5.digest('hex');
        }
    }
    app.Controller = CustomController;

    //验证规则
    app.validator.addRule('json', (rule, value) => {
        try {
            JSON.parse(value);
        } catch (err) {
            return 'must be json string';
        }
    });
};