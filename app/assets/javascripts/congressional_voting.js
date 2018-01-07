var locations = [
  ["Alabama", 32.806671, -86.791130, '<a href="senate/al">'+'Alabama</a>'],
  ["Alaska", 61.370716, -152.404419, '<a href="senate/ak">'+'Alaska</a>'],
  ["Arizona", 33.729759, -111.431221, '<a href="senate/az">'+'Arizona</a>'],
  ["Arkansas", 34.969704, -92.373123, '<a href="senate/ar">'+'Arkansas</a>'],
  ["California", 36.116203, -119.681564, '<a href="senate/ca">'+'California</a>'],
  ["Colorado", 39.059811, -105.311104, '<a href="senate/co">'+'Colorado</a>'],
  ["Connecticut", 41.597782, -72.755371,'<a href="senate/ct">'+'Connecticut</a>'],
  ["Delaware", 39.318523, -75.507141, '<a href="senate/de">'+'Delaware</a>'],
  ["Florida", 27.766279, -81.686783, '<a href="senate/fl">'+'Florida</a>'],
  ["Georgia", 33.040619, -83.643074, '<a href="senate/ca">'+'Georgia</a>'],
  ["Hawaii",21.094318, -157.498337, '<a href="senate/ga">'+'Hawaii</a>'],
  ["Idaho", 44.240459, -114.478828, '<a href="senate/hi">'+'Idaho</a>'],
  ["Illinois", 40.349457, -88.986137, '<a href="senate/id">'+'Illinois</a>'],
  ["Indiana", 39.849426, -86.258278, '<a href="senate/il">'+'Indiana</a>'],
  ["Iowa", 42.011539, -93.210526, '<a href="senate/ia">'+'Iowa</a>'],
  ["Kansas", 38.526600, -96.726486, '<a href="senate/ks">'+'Kansas</a>'],
  ["Kentucky", 37.668140, -84.670067,'<a href="senate/ky">'+'Kentucky</a>'],
  ["Louisiana", 31.169546, -91.867805,'<a href="senate/la">'+'Louisiana</a>'],
  ["Maine", 44.693947, -69.381927,'<a href="senate/me">'+'Maine</a>'],
  ["Maryland", 39.063946, -76.802101,'<a href="senate/md">'+'Maryland</a>'],
  ["Massachusetts", 42.230171, -71.530106,'<a href="senate/ma">'+'Massachusetts</a>'],
  ["Michigan", 43.326618, -84.536095,'<a href="senate/mi">'+'Michigan</a>'],
  ["Minnesota", 45.694454, -93.900192,'<a href="senate/mn">'+'Minnesota</a>'],
  ["Mississippi", 32.741646, -89.678696,'<a href="senate/ms">'+'Mississippi</a>'],
  ["Missouri", 38.456085, -92.288368,'<a href="senate/mo">'+'Missouri</a>'],
  ["Montana", 46.921925, -110.454353,'<a href="senate/mt">'+'Montana</a>'],
  ["Nebraska", 41.125370, -98.268082,'<a href="senate/ne">'+'Nebraska</a>'],
  ["Nevada", 38.313515, -117.055374,'<a href="senate/nv">'+'Nevada</a>'],
  ["New Hampshire", 43.452492, -71.563896,'<a href="senate/nh">'+'New Hampshire</a>'],
  ["New Jersey", 40.298904, -74.521011,'<a href="senate/nj">'+'New Jersey</a>'],
  ["New Mexico", 34.840515, -106.248482,'<a href="senate/nm">'+'New Mexico</a>'],
  ["New York", 42.165726, -74.948051,'<a href="senate/ny">'+'New York</a>'],
  ["North Carolina", 35.630066, -79.806419,'<a href="senate/nc">'+'North Carolina</a>'],
  ["North Dakota", 47.528912, -99.784012,'<a href="senate/nd">'+'North Dakota</a>'],
  ["Ohio", 40.388783, -82.764915,'<a href="senate/oh">'+'Ohio</a>'],
  ["Oklahoma", 35.565342, -96.928917,'<a href="senate/ok">'+'Oklahoma</a>'],
  ["Oregon", 44.572021, -122.070938,'<a href="senate/or">'+'Oregon</a>'],
  ["Pennsylvania", 40.590752, -77.209755,'<a href="senate/pa">'+'Pennsylvania</a>'],
  ["Rhode Island", 41.680893, -71.511780,'<a href="senate/ri">'+'Rhode Island</a>'],
  ["South Carolina", 33.856892, -80.945007,'<a href="senate/sc">'+'South Carolina</a>'],
  ["South Dakota", 44.299782, -99.438828,'<a href="senate/sd">'+'South Dakota</a>'],
  ["Tennessee", 35.747845, -86.692345,'<a href="senate/tn">'+'Tennessee</a>'],
  ["Texas", 31.054487, -97.563461,'<a href="senate/tx">'+'Texas</a>'],
  ["Utah", 40.150032, -111.862434,'<a href="senate/ut">'+'Utah</a>'],
  ["Vermont", 44.045876, -72.710686,'<a href="senate/vt">'+'Vermont</a>'],
  ["Virginia", 37.769337, -78.169968,'<a href="senate/va">'+'Virginia</a>'],
  ["Washington", 47.400902, -121.490494,'<a href="senate/wa">'+'Washington</a>'],
  ["West Virginia", 38.491226, -80.954453,'<a href="senate/wv">'+'West Virginia</a>'],
  ["Wisconsin", 44.268543, -89.616508,'<a href="senate/wi">'+'Wisconsin</a>'],
  ["Wyoming", 42.755966, -107.302490,'<a href="senate/wy">'+'Wyoming</a>']
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
      content: location[3]
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
