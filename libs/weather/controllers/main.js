'use strict';

var Q = require('Q'),
    _ = require('lodash');

function weatherController(repository) {
	this.repository = repository;

  this.getWeather = function (req, res) {
    var resultObject = {
      city: 'Kalkuta',
      country: 'Bulgaria'
    };

    repository.getWeatherData()
    .then(function(weatherData){
      resultObject.weatherData = weatherData;

      res.send(resultObject);
    })
    .catch(function(error){
      res.send(error);
    })
  };
}

module.exports = function(repository) {
  return new weatherController(repository);
};