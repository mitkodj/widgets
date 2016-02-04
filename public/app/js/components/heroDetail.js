function HeroDetailController($scope, $element, $attrs) {
	var ctrl = this;

	ctrl.update = function(prop, value) {
		ctrl.onUpdate({hero: ctrl.hero, prop: prop, value: value});
	}
}

angular.module('widgets').component('heroDetail', {
	templateUrl: '../../html/heroDetail.html',
	controller: HeroDetailController,
	bindings: {
		hero: '=',
		onDelete: '&',
		onUpdate: '&'
	}
});