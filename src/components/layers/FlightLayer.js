import React, { Component } from "react";
import { Layer } from "deck.gl";
import { ScatterplotLayer } from "@deck.gl/layers";
import axios from "axios";

const FLIGHT_API =
  "https://opensky-network.org/api/states/all?lamin=45.8389&lomin=5.9962&lamax=47.8229&lomax=10.5226";

var coordinates = [];
var flightRadar = [
  {
    name: "Charing Cross",
    code: "CC",
    address: "Charing Cross",
    exits: 4214,
    coordinates: [-0.118092, 51.509865]
  }
];

async function getData() {
  const { data: flights } = await axios.get(FLIGHT_API);
  coordinates = [flights.states[0][5], flights.states[0][6]];
  console.log("strawberry" + coordinates);
  flightRadar = [
    {
      name: "Aircraft",
      code: "CC",
      address: "Switzerland",
      exits: 4214,
      coordinates: [coordinates[0], coordinates[1]]
    }
  ];

  console.log(flightRadar);
  return flightRadar;
}

getData();

const LAYER_FLIGHTS = new ScatterplotLayer({
  id: "flights-layer",
  data: flightRadar,
  pickable: true,
  opacity: 0.8,
  stroked: true,
  filled: true,
  radiusScale: 2,
  radiusMinPixels: 1,
  radiusMaxPixels: 100,
  lineWidthMinPixels: 1,
  getPosition: d => d.coordinates,
  getRadius: d => Math.sqrt(d.exits),
  getFillColor: d => [255, 179, 255],
  getLineColor: d => [0, 0, 0],
  onHover: ({ object, x, y }) => {
    const tooltip = `${object.name}\n${object.address}`;
  }
});

export default LAYER_FLIGHTS;
