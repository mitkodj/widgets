
var widgetsApp = 
angular.module('widgets', []);

widgetsApp.controller('mainController', function($scope) {
	$scope.items= [1,2,3,4,5];
});