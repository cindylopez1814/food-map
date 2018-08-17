let map;
let infowindow;

function initMap() {
  // Creamos un mapa con las coordenadas actuales
  navigator.geolocation.getCurrentPosition(function(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    let myLatlng = new google.maps.LatLng(latitude, longitude);

    let mapOptions = {
      center: myLatlng,
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.MAP
    };

    map = new google.maps.Map(document.getElementById('maps'), mapOptions);

    // Creamos el infowindow
    infowindow = new google.maps.InfoWindow();

    // Especificamos la localización, el radio y el tipo de lugares que queremos obtener
    let request = {
      location: myLatlng,
      radius: 5000,
      types: ['restaurant', 'bar', 'cafe']
    };
    let service = new google.maps.places.PlacesService(map);
    // Creamos el servicio PlaceService y enviamos la petición.
    service.nearbySearch(request, function(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
          createMarket(results[i]);
        }
      }
    });
  });
};

function search() {
  navigator.geolocation.getCurrentPosition(function(position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;

    const myLatlng = new google.maps.LatLng(lat, long);
    const mapOptions = {
      center: myLatlng,
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.MAP
    };
    map = new google.maps.Map(document.getElementById('maps'), mapOptions);
    infowindow = new google.maps.InfoWindow();

    let service = new google.maps.places.PlacesService(map);
    let input = document.getElementById('search').value;
    service.textSearch({
      location: myLatlng,
      radius: 5000,
      query: input,
      types: ['restaurant', 'bar', 'cafe']
    }, function(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        containerInfo.innerHTML = '';
        for (var i = 0; i < results.length; i++) {
          createModal(results[i]);
        }
      }
    });
  });
}
