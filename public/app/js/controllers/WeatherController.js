 'use strict';

 widgetsApp.controller('WeatherController', 
 	function WeatherController($scope, weathersData) {
 	weathersData.getWeatherData()
	 	.then( function(response, status, headers, config) {
			$scope.weatherdays = response.data;
			$scope.limit = 211;
		})
		.catch( function(error, status, headers, config) {
			alert(error);
		});
 });