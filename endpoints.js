controller = require('./controller');

function endpoints(app) {
  app.get('/api/test', controller.getTest);
  app.post('/api/test', controller.postTest);
}

module.exports = endpoints