'use strict';

var Q = require('Q'),
    _ = require('lodash');

function WeatherController(repository) {

  this.prop = "FGFGFGFG";
  var that = this;
  this.repository = repository;

  this.funcs();

  this.getWeather = function (req, res) {
    var resultObject = {
      city: 'Sofia',
      country: 'Bulgaria'
    };

    console.log(this == that);
    // this.consi();

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

WeatherController.prototype.consi = function() {
  console.log("consi ", this.prop);
}

WeatherController.prototype.funcs = function() {
  var resultObject = {
      city: 'Sofia',
      country: 'Bulgaria'
    };

    this.repository.getWeatherData(resultObject.country, resultObject.city)
    .then(function(weatherData){

      resultObject = _.merge(resultObject, createWeatherObject(weatherData));

      console.log(resultObject);
    })
    .catch(function(error){
      console.log(error);
    })
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
  return new WeatherController(repository);
};