const map = L.map("map").setView([49.80433535750162, 30.127963556537154], 13);

// google maps
L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
  maxZoom: 20,
  subdomains: ["mt0", "mt1", "mt2", "mt3"],
  attribution: "© Google Maps",
}).addTo(map);

// red marker
const redIcon = new L.Icon({
  iconUrl:
    "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

//  (latitude широта и longitude долгта)

const data = [
  {
    id: "1",
    geocode: [49.796801035516005, 30.14993621257536],
    label: "Велмарт",
  },
  {
    id: "2",
    geocode: [49.80090073847872, 30.12470199040648],
    label: "ЦОВ",
  },
  {
    id: "3",
    geocode: [49.785794719776035, 30.153329328785468],
    label: "Мак",
  },
];

data.forEach((location) => {
  L.marker(location.geocode, {
    icon: redIcon,
  })
    .bindPopup(`<b>${location.label}</b>`)
    .addTo(map);
});

// let marker = L.marker([49.796801035516005, 30.14993621257536], {
//   icon: redIcon,
// })
//   .bindPopup("<b>Hello world!</b><br>I am a popup.")
//   .addTo(map);
// marker.bindPopup("<b>Hello world!</b><br>I am a popup.");

// DESIGN MAPS ------------------------------------------------------
// nice satellite
// let mapLink = '<a href="http://www.esri.com/">Esri</a>';
// let wholink =
//   "i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community";

// L.tileLayer(
//   "http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
//   {
//     attribution: "&copy; " + mapLink + ", " + wholink,
//     maxZoom: 18,
//   }
// ).addTo(map);

// OpenStreetMap
// L.tileLayer("http://{s}.google.com/vt/lyrs=s,h&x={m}&y={m}&z={m}", {
//   maxZoom: 19,
//   attribution: "© OpenStreetMap",
// }).addTo(map);
