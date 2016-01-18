
var GeoCoder = function() {
  var geocoder = null;
  var that = this;

  //Get the latitude and the longitude;
  this.successFunction = function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      that.codeLatLng(lat, lng);
  };

  this.errorFunction = function(){
      alert("Geocoder failed");
  };

  this.initialize = function(){
    geocoder = new google.maps.Geocoder();

  };

  this.codeLatLng = function(lat, lng) {

    var latlng = new google.maps.LatLng(lat, lng);
    geocoder.geocode({'latLng': latlng}, function(results, status) {
      console.log(results, status);
      if (status == google.maps.GeocoderStatus.OK) {
      console.log(results)
        if (results[1]) {
         //formatted address
         // alert(results[0].formatted_address)
        //find country name
             for (var i=0; i<results[0].address_components.length; i++) {
            for (var b=0;b<results[0].address_components[i].types.length;b++) {

            //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
                if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
                    //this is the object you are looking for
                    city= results[0].address_components[i];
                    break;
                }
            }
        }
        //city data
        console.log(city.short_name + " " + city.long_name)


        } else {
          alert("No results found");
        }
      } else {
        alert("Geocoder failed due to: " + status);
      }
    });
  };

  if (navigator.geolocation) {
      this.initialize();

      navigator.geolocation.getCurrentPosition(this.successFunction, this.errorFunction);
  } 

};

var Weather = function() {
  this.name = "Kalkuta";
};

Weather.prototype.setWeatherDay = function(domElement, weatherDay) {
  var header = $(domElement).children('.wthr-header').children('.wthr-header-item');
  var icon = $(domElement).children('.wthr-header').children('.wthr-header-img');
  var max = $(domElement).children('.wthr-max');
  var min = $(domElement).children('.wthr-min');

  header.text(weatherDay.title.substring(0,3));
  icon.attr('src', weatherDay.icon_url);
  max.text(weatherDay.high);
  min.text(weatherDay.low);
}

$(document).ready(function($) {
  // $('#widgetOne').click(function(e) {

    console.log(getLocation());

    $.ajax({
      url: '/weather',
      // data: {
      //  location: ''
      // },
      success: function(response) {

        $('#widgetWthr div.summary-line1').text(response.city);

        var currentDay = $('#wthr-body').children(":first"),
            index = 0;

        while (currentDay && response[index]) {
          WeatherController.setWeatherDay(currentDay, response[index]);
          currentDay = $(currentDay).next();
          index++;
        }
      }
    });
  // });
});

WeatherController = new Weather();