 'use strict';

 widgetsApp.controller('WeatherController', function WeatherController($scope) {

 	var weatherDays = [{
 		weekday: 'Mon',
 		icon_url: 'http://icons.wxug.com/i/c/k/mostlycloudy.gif',
 		high: '20',
 		low: '10'
 	}, {
 		weekday: 'Tue',
 		icon_url: 'http://icons.wxug.com/i/c/k/mostlycloudy.gif',
 		high: '20',
 		low: '10',
 		middle_day: 'wthr-middle-day'
 	}, {
 		weekday: 'Wed',
 		icon_url: 'http://icons.wxug.com/i/c/k/mostlycloudy.gif',
 		high: '20',
 		low: '10'
 	}];
 	$scope.weatherdays = weatherDays;
 	$scope.message = "Miktooo";
 });