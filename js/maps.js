      var map;
			var videourl = "https://www.youtube.com/embed/HaoWlx4E-KI?autoplay=1";
      function initMap() {
				var myLatlng = {lat: 41.0688, lng: -73.8752};
        map = new google.maps.Map(document.getElementById('map'), {
          center: myLatlng,
          zoom: 8
        });
				
				var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Click to zoom'
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
					video = document.getElementById("myvideo");
					video.src = videourl;
        });
      }