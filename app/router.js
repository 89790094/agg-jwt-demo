module.exports = app => {
  //Index
  app.get('/', 'v1.index.index');
  app.get('/api/v1', 'v1.index.index');
  //Auth
  app.post('/auth', 'auth.index');
  //User
  app.resources('member', '/api/v1/member', 'v1.member');
};