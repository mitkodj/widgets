'use strict';

var Q = require('Q'),
    _ = require('lodash');

function weatherController(repository) {

  this.getWeather = function (req, res) {
    var resultObject = {
      city: 'Sofia',
      country: 'Bulgaria'
    };

    repository.getWeatherData(resultObject.country, resultObject.city)
    .then(function(weatherData){

      resultObject = _.merge(resultObject, createWeatherObject(weatherData));

      res.send(resultObject);
    })
    .catch(function(error){
      res.send(error);
    })
  };
}

function createWeatherObject(weatherData) {

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

  return resultObject;
}

module.exports = function(repository) {
  return new weatherController(repository);
};