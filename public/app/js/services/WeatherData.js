widgetsApp.factory('weathersData', function($http) {

	return {
		getWeatherData: function(callback) {
			return $http({method: 'GET', url: '/weather'});
		}
	};
})