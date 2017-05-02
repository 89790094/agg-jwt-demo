module.exports = app => {
  app.get('/api/v1/','v1.index.index');
  app.get('/token/:uname/:pwd','token.index');
  //app.resources('','','');

};