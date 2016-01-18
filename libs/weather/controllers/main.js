'use strict';

var Q = require('Q'),
    _ = require('lodash');

function weatherController(repository) {
	this.repository = repository;

  this.getWeather = function (req, res) {
    var resultObject = {
      city: 'Sofia',
      country: 'Bulgaria'
    };

    repository.getWeatherData()
    .then(function(weatherData){

      // console.log(weather.response);
      console.log("dddd", weatherData);
      // resultObject = _.filter(weather., function(element){

      // });

      res.send(weatherData);
    })
    .catch(function(error){
      res.send(error);
    })
  };
}

module.exports = function(repository) {
  return new weatherController(repository);
};