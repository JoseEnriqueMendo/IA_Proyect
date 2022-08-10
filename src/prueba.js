import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
  Polyline,
  Polygon,
} from "@react-google-maps/api";

// var Graph = require("node-dijkstra");





export  function Dkjistra({ nodo1, nodo2 }) {

  //   async function calculateRoute({nodo1, nodo2}) {
    console.log("hola mundo")
  // eslint-disable-next-line no-undef
  var init = new google.maps.LatLng(Number(nodo1.lat), Number(nodo1.lon));
  // eslint-disable-next-line no-undef
  var end = new google.maps.LatLng(Number(nodo2.lat), Number(nodo2.lon));

  // eslint-disable-next-line no-undef
  const directionsService =  new google.maps.DirectionsService();

  const results =  directionsService.route({
    origin: {init},
    destination: {end},
    // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
  });
  console.log(results);
  // return results.routes[0].legs[0].distance.text;
  //   }

  // var g = new Graph();
  // g.addVertex('A', {B:1});
  // g.addVertex('B', {A:1, C:9, D: 4});
  // g.addVertex('C', {B:9, D:1});
  // g.addVertex('D', {C:1, B:4});

  // console.log(g.path('A', 'C')); // => ['A', 'B', 'C', 'D']

  
}
