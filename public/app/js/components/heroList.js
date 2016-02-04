var ngModule = angular.module('widgets', []);

ngModule.controller('mainController', function($scope) {
  $scope.items = [1,2,3,4,5];
});

function HeroListController($scope, $element, $attrs) {
	var ctrl = this;

	ctrl.list = [{
		name: 'Superman',
		location: ''
	}, {
		name: 'Batman',
		location: 'Wayne Manor'
	}];

	ctrl.updateHero = function(hero, prop, value) {
		hero[prop] = value;
	};

	ctrl.deletehero = function(hero) {
		var idx = ctrl.list.indexOf(hero);
		if (idx >= 0) {
			ctrl.list.splice(idx, 1);
		}
	};
}

ngModule.component('heroList', {
	templateUrl: '../../html/heroList.html',
	// template: '<div style="width: 100px; height: 100px; background-color: red;">',
	controller: HeroListController
});