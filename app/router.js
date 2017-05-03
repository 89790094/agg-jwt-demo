module.exports = app => {
  require('./route/login')(app);
  require('./route/user')(app);
};