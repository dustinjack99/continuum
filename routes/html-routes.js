var path = require('path');

module.exports = app => {
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/layout/index.handlebars'));
  });

  app.get('/calender', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/layout/calender.handlebars'));
  });

  app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/layout/blod.handlebars'));
  });

  app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/layout/about.handlebars'));
  });
};
