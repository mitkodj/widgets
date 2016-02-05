// here we should setup the weather day directive with corresponding bindings and configs
//using the tamplate, located in the app/html/widgetTemplates/weatherDay.html
//Should implement:
//- weather day data binding.

//It's controller should define:
//- update(prop-name, prop-value) method

widgetsApp.directive('weatherDay', function() {

	return {
		templateUrl: 'html/widgetTemplates/weatherDay.html',
		controllerAs: 'ctrl',
		bindToController: true,
		scope: {
			weekday: '=',
			high: '=',
			low: '=',
			onUpdate: '&'
		},
		controller: function () {

		}
	};
});