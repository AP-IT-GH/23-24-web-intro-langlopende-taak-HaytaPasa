let map = L.map('itMap2').setView([51.23009, 4.41616], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let logomarkerIcon = L.icon({
  iconUrl: './images/mapmarker.png',
  shadowUrl: './images/mapmarker.png',

  iconSize:     [60, 60], // size of the icon
  shadowSize:   [60, 60], // size of the shadow
  iconAnchor:   [0, 60], // point of the icon which will correspond to marker's location
  shadowAnchor: [0, 60],  // the same for the shadow
  popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});

L.marker([51.23009, 4.41616], {icon: logomarkerIcon}).addTo(map);