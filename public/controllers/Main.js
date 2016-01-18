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
		  data: {
		  	location: ''
		  },
		  success: function(response) {
				console.log(response);

				// $('#widgetOne a[name=widgetTitle]').text(response);
			}
		});
	});
});