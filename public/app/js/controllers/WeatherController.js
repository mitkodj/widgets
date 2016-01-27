 'use strict';

 widgetsApp.controller('WeatherController', 
 	function WeatherController($scope, weathersData) {

 	// var weatherDays = [{
 	// 	weekday: 'Mon',
 	// 	icon_url: 'http://icons.wxug.com/i/c/k/mostlycloudy.gif',
 	// 	high: '20',
 	// 	low: '10'
 	// }, {
 	// 	weekday: 'Tue',
 	// 	icon_url: 'http://icons.wxug.com/i/c/k/mostlycloudy.gif',
 	// 	high: '20',
 	// 	low: '10',
 	// 	middle_day: 'wthr-middle-day'
 	// }, {
 	// 	weekday: 'Wed',
 	// 	icon_url: 'http://icons.wxug.com/i/c/k/mostlycloudy.gif',
 	// 	high: '20',
 	// 	low: '10'
 	// }];
 	weathersData.getWeatherData()
	 	.then( function(response, status, headers, config) {
			$scope.weatherdays = response.data;
			$scope.limit = 211;
		})
		.catch( function(error, status, headers, config) {
			alert(error);
		});
 });