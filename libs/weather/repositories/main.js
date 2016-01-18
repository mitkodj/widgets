var Q = require('Q');
var config = require('../../../config/config.js');
var request = require('request');

function setupWeatherConnection() {
}

function getWeatherData() {

	var deferred = Q.defer();

	var url = 'http://api.wunderground.com/api/bc03ce9d060e48b5/forecast/q/CA/San_Francisco.json';

	request(url, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    // console.log(response) // Show the HTML for the Google homepage. 
	  	deferred.resolve(response);
	  } else {
	  	deferred.reject(error);
	  }
	});

	return deferred.promise;
}

module.exports = {
	    getWeatherData: getWeatherData
};