module.exports = app => {
    app.get('/api/v1/', 'v1.index.index');
    app.post('/login', 'login.index');
    app.get('/login', 'login.index');
}