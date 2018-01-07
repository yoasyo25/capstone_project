var locations = [
  ["Alabama", 32.806671, -86.791130, '<a href="senate/al">'+
            'Alabama</a>']
  // ["Alaska", 61.370716, -152.404419, "/alaska"],
  // ["Arizona", 33.729759, -111.431221, "arizona"],
  // ["Arkansas", 34.969704, -92.373123, "/arkansas"],
  // ["California", 36.116203, -119.681564, "/california"],
  // ["Colorado", 39.059811, -105.311104, "/colorado"],
  // ["Connecticut", 41.597782, -72.755371],
  // ["Delaware", 39.318523, -75.507141],
  // ["District of Columbia", 38.897438, -77.026817],
  // ["Florida", 27.766279, -81.686783],
  // ["Georgia", 33.040619, -83.643074],
  // ["Hawaii",21.094318, -157.498337],
  // ["Idaho", 44.240459, -114.478828],
  // ["Illinois", 40.349457, -88.986137],
  // ["Indiana", 39.849426, -86.258278],
  // ["Iowa", 42.011539, -93.210526],
  // ["Kansas", 38.526600, -96.726486],
  // ["Kentucky", 37.668140, -84.670067],
  // ["Louisiana", 31.169546, -91.867805],
  // ["Maine", 44.693947, -69.381927],
  // ["Maryland", 39.063946, -76.802101],
  // ["Massachusetts", 42.230171, -71.530106],
  // ["Michigan", 43.326618, -84.536095],
  // ["Minnesota", 45.694454, -93.900192],
  // ["Mississippi", 32.741646, -89.678696],
  // ["Missouri", 38.456085, -92.288368],
  // ["Montana", 46.921925, -110.454353],
  // ["Nebraska", 41.125370, -98.268082],
  // ["Nevada", 38.313515, -117.055374],
  // ["New Hampshire", 43.452492, -71.563896],
  // ["New Jersey", 40.298904, -74.521011],
  // ["New Mexico", 34.840515, -106.248482],
  // ["New York", 42.165726, -74.948051],
  // ["North Carolina", 35.630066, -79.806419],
  // ["North Dakota", 47.528912, -99.784012],
  // ["Ohio", 40.388783, -82.764915],
  // ["Oklahoma", 35.565342, -96.928917],
  // ["Oregon", 44.572021, -122.070938],
  // ["Pennsylvania", 40.590752, -77.209755],
  // ["Rhode Island", 41.680893, -71.511780],
  // ["South Carolina", 33.856892, -80.945007],
  // ["South Dakota", 44.299782, -99.438828],
  // ["Tennessee", 35.747845, -86.692345],
  // ["Texas", 31.054487, -97.563461],
  // ["Utah", 40.150032, -111.862434],
  // ["Vermont", 44.045876, -72.710686],
  // ["Virginia", 37.769337, -78.169968],
  // ["Washington", 47.400902, -121.490494],
  // ["West Virginia", 38.491226, -80.954453],
  // ["Wisconsin", 44.268543, -89.616508],
  // ["Wyoming", 42.755966, -107.302490],
];

function initMap() {
  var options = {
    center: {
      lat: 39.0558,
      lng: -95.6890
    },
    zoom: 4,
    draggable: false
  },

  element = document.getElementById("map"),
  map = new google.maps.Map(element, options);

  locations.forEach(function(location) {
    var marker = new google.maps.Marker({
      position: {
        lat: location[1],
        lng: location[2]
      },
      map: map,
      url: location[3]
    });

    var infowindow = new google.maps.InfoWindow({
      content: location[0] + "<br>" + location[3]
    });


  google.maps.event.addListener(marker, 'click', function() {
    if (!marker.open) {
      infowindow.open(map,marker);
      marker.open = true;
      } else {
      infowindow.close();
      marker.open = false;
      }
    });

  });


}
