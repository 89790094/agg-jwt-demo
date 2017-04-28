module.exports = app => {
  app.get('/','index.index');
  app.resources('user','/api/user', 'user');
};