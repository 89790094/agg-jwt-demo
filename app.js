module.exports = app => {
    app.validator.addRule('json', (rule, value) => {
        try {
            JSON.parse(value);
        } catch (err) {
            return 'must be json string';
        }
    });
};