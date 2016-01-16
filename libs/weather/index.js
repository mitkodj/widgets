//by default when requiring a folder it loads the index.js file in that folder
var weatherRepository = require('./repositories/main');
var weatherController = require('./controllers/main')(weatherRepository);
var weatherRouter = require('./routes/main')(weatherController);

module.exports = weatherRouter;