widgetsApp.factory('weathersData', function($http) {


	return {

		getWeatherData: function(callback) {
			return $http({method: 'GET', url: '/weather'});
		},

		weatherData: [{
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
	 	}]

	};
})