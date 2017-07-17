var map;
			
      function initMap() {
				var events = [];
				var videodiv = document.getElementById("display");
				var myframe = document.getElementById("associatedvideo");
				var info = document.getElementById("info");
				var myLatLng = {lat: 41.0688, lng: -73.8752};
        map = new google.maps.Map(document.getElementById('map'), {
          center: myLatLng,
          zoom: 8
        });
				
				var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Click to zoom',
					url: "https://www.youtube.com/embed/HaoWlx4E-KI?autoplay=1",
					date: new Date(year=2017, month=3, day=17)
        });
				
				map.addListener('center_changed', function() {
          // 3 seconds after the center of the map has changed, pan back to the
          // marker.
          window.setTimeout(function() {
            map.panTo(marker.getPosition());
          }, 3000);
        });
				
				marker.addListener('click', function() {
          map.setZoom(10);
          map.setCenter(marker.getPosition());
					myframe.src = marker.url;
					videodiv.style.display = "block";
					info.innerHTML = "Date: " + marker.date.getFullYear() + "." + marker.date.getMonth() + "." + marker.date.getDate();
        });
      }