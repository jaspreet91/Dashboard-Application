
 function initMap() {
        var centr = {lat: 37.0902, lng: -95.7129};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: centr
        });
        
        function addMarker(coords){
            var marker = new google.maps.Marker({
              position: coords,
              map: map,
            });
            
        }
       
      }