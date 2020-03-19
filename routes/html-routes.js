const path = require('path');

module.exports = app => {
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/calender', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/calender.html'));
  });

  app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/blog.html'));
  });

  app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/about.html'));
  });
};
