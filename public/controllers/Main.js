function getLocation() {
    var gC = new GeoCoder();
}

function showPosition(position) {
	console.log(position);
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 
}

