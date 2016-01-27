var Q = require('Q'),
    _ = require('lodash');

function WeatherController(repository) {
    'use strict';
    this.repository = repository;

    this.getWeather = function (req, res) {
        var resultObject = {
            city: 'Sofia',
            country: 'Bulgaria'
        };

        repository.getWeatherData(resultObject.country, resultObject.city)
            .then(function (weatherData) {
                resultObject.days = createWeatherObject(weatherData);
                res.send(resultObject);
            })
            .catch(function (error) {
                res.send(error);
            });
    };
}

function createWeatherObject(weatherData) {
    'use strict';
    var forecastDay = weatherData.forecast.simpleforecast.forecastday,
        resultObject = _.filter(weatherData.forecast.txt_forecast.forecastday, function (item, index) {
            return index % 2 === 0;
        });

    _.forEach(forecastDay, function (item, index) {
        if (resultObject[index]) {
            resultObject[index].high = item.high.celsius;
            resultObject[index].low = item.low.celsius;
        }
    });

    return resultObject;
}

module.exports = function (repository) {
    'use strict';
    return new WeatherController(repository);
};