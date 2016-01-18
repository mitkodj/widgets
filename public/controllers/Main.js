function getLocation() {
    var gC = new GeoCoder();
}

function showPosition(position) {
	console.log(position);
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 
}

$(document).ready(function($) {
	$('#widgetOne').click(function(e) {

		console.log(getLocation());

		$.ajax({
		  url: '/weather',
		  // data: {
		  // 	location: ''
		  // },
		  success: function(response) {

				$('#widgetWthr div.summary-line1').text(response.city);

				$('#wthr-header-img1').attr('src', response.weatherData[0].icon_url);
				$('#wthr-header-img3').attr('src', response.weatherData[2].icon_url);
				$('#wthr-header-img5').attr('src', response.weatherData[4].icon_url);
				// $('#widgetOne a[name=widgetTitle]').text(response);
			}
		});
	});
});