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

      console.log('callbasack: ', resultObject);
      resultObject = _.merge(resultObject, createWeatherObject(weatherData));
      // resultObject.weatherData = weatherData;
      console.log('result: ', resultObject);

      res.send(resultObject);
    })
    .catch(function(error){
      res.send(error);
    })
  };
}

function createWeatherObject(weatherData) {

  console.log();
  var forecastDay = weatherData.forecast.simpleforecast.forecastday,
    resultObject = _.filter(weatherData.forecast.txt_forecast.forecastday, function(item, index) {
      return index%2 == 0;
    });

  _.forEach(forecastDay, function(item, index) {
    if (resultObject[index]) {
      resultObject[index].high = item.high.celsius;
      resultObject[index].low = item.low.celsius;
    }
  });

  console.log(resultObject);

  return resultObject;
}

module.exports = function(repository) {
  return new weatherController(repository);
};