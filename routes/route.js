module.exports = (app) => {
    const blog = require('../controllers/controllers');

    app.get('/api/blogs', blog.getall);
    app.get('/api/blog/:blogID', blog.getone);
    app.post('/api/create', blog.create);
    app.put('/api/update/:blogID', blog.updateone);
    app.delete('/api/delete/:blogID', blog.deleteone);
}