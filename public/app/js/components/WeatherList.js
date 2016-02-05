// var ngModule = angular.module('widgets', []);

// ngModule.controller('mainController', function($scope) {
//   $scope.items = [1,2,3,4,5];
// });

function WeatherList($scope) {

	var ctrl = this;
	ctrl.weatherDays = [{
		weekday: 'Wednesday',
		high: 23,
		low: 11
	}, {
		weekday: 'Thursday',
		high: 21,
		low: 13
	}];

	ctrl.updateDay = function (weatherDay, propertyName, propertyValue) {
		weatherDay[propertyName] = propertyValue;
	};
}

widgetsApp.directive('weatherList', function () {
	return {
		templateUrl: 'html/widgetTemplates/weatherWidget.html',
		controller: WeatherList
	};
});