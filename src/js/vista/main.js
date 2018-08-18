window.onload = () => {
  // setTimeout(initMap(), 5000);
  validateInput();
};

function createMarket(place) {
  // Creamos un marcador
  let marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  // Asignamos el evento click del marcador
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent('<div><strong>' + place.name + '</strong></div>');
    infowindow.open(map, this);
  });
}

function createModal(place) {
  let marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  // Asignamos el evento click del marcador
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + place.formatted_address + '<br><strong>Califición: </strong>' + place.rating + '</div>');
    infowindow.open(map, this);
  });
  infoModal(place);
}

function infoModal(place) {
  containerInfo.innerHTML += '<div><button type="button" class="btn modal-button" data-toggle="modal" data-target="#a' + place.id + '">' + place.name.toUpperCase() + '</button><div id="a' + place.id + '" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true"><div class="modal-dialog modal-dialog-centered" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLongTitle">' + place.name + '</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><p>Dirección:<br>' + place.formatted_address + '</p><p>Estado:  Abierto</p><p>Calificación:  ' + place.rating + '</p></div></div></div></div></div><hr>';
} 