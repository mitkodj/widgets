var Q = require('Q');
var config = require('../../../config/config.js');
var request = require('request');

function setupWeatherConnection() {
}

function getWeatherData(country, city) {

	var deferred = Q.defer();

	var url = 'http://api.wunderground.com/api/bc03ce9d060e48b5/forecast/q/' + country + '/' + city + '.json';

	request(url, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    var body = JSON.parse(body);
	  	// deferred.resolve(body.forecast.txt_forecast.forecastday);
	  	deferred.resolve(body);
	  } else {
	  	deferred.reject(error);
	  }
	});

	return deferred.promise;
}

module.exports = {
	    getWeatherData: getWeatherData
};