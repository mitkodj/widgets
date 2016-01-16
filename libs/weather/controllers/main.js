var Q = require('Q');

function weatherController(repository) {
	this.repository = repository;
}

weatherController.prototype.getWeather = function (req, res) {
  return true;
};

module.exports = function(repository) {
  return new weatherController(repository);
};