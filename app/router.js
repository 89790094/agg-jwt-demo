module.exports = app => {
  app.get('/','index.index');
  app.get('/token/','token.index');
  
};