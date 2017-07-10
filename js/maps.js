function initMap() {
	var uluru = {lat: 40.8068, lng: 131.044};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 7;
		center: uluru;
	});
	var marker = new.googlemaps.Marker({
		position: uluru,
		map: map
	});
}