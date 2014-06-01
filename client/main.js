$(function() {
  $(window).resize(function() {
    $('#map').css('height', window.innerHeight - 82 - 45);
  });
  $(window).resize(); // trigger resize event
});

// create marker collection
Markers = new Meteor.Collection('markers');

Meteor.subscribe('markers');

Template.map.rendered = function() {
  L.Icon.Default.imagePath = 'packages/leaflet/images';

  var map = L.map('map', {
    doubleClickZoom: false
  }).setView([49.25044, -123.137], 13);

  L.tileLayer.provider('Thunderforest.Outdoors').addTo(map);

  map.on('dblclick', function(event) {
    Markers.insert({latlng: event.latlng});
  });

  var query = Markers.find();
  query.observeChanges({
    added: function(id, fields) {
      // console.log("insert marker at: ", JSON.stringify(fields.latlng));
      var marker = L.marker(fields.latlng).addTo(map)
        .on('click', function(event) {
          // console.log("remove marker: ", id);
          map.removeLayer(marker);
          Markers.remove({_id: id});
        });
    } 
  });
};