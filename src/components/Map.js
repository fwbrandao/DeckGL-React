import React, { Component } from "react";
import axios from "axios";
import DeckGL from "deck.gl";
import { StaticMap } from "react-map-gl";
import { ScatterplotLayer } from "@deck.gl/layers";
import LAYER_POLY from "./layers/PolygonLayer";
import LAYER_GRID from "./layers/GridLayer";
import LAYER_LINEAR from "./layers/Linelayer";
import LAYER_SCATTERPLOT from "./layers/ScatterplotLayer";

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoibWF0dGhhdXNlbiIsImEiOiJjanVvaDF1N2UweGlyM3ltdTZ1c2U3YWdvIn0.fWPrCVx2EAnHIyKgwZdP1Q";

const FLIGHT_API =
  "https://opensky-network.org/api/states/all?lamin=45.8389&lomin=5.9962&lamax=47.8229&lomax=10.5226";

const initialViewState = {
  longitude: -0.118092,
  latitude: 51.509865,
  zoom: 13,
  pitch: 0,
  bearing: 0
};

class Map extends Component {
  state = {
    flights: [],
    longitude: 0,
    latitude: 0
  };

  async componentDidMount() {
    const { data: flights } = await axios.get(FLIGHT_API);
    this.setState({ flights: flights });
    this.setState({ longitude: this.state.flights.states[0][5] });
    this.setState({ latitude: this.state.flights.states[0][6] });
  }
  render() {
    console.log(this.state.longitude);
    console.log(this.state.latitude);
    const flightData = [
      {name: 'Charing Cross', code:'CC', address: 'Charing Cross', exits: 4214, coordinates: [this.state.longitude, this.state.latitude]}
  ]
    const LAYER_CUSTOM = new ScatterplotLayer({
      id: "flights-layer",
      data: flightData,
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
    return (
      <div>
        <DeckGL
          initialViewState={initialViewState}
          controller={true}
          layers={LAYER_CUSTOM}
        >
          <StaticMap
            mapStyle="mapbox://styles/mapbox/dark-v9"
            mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
          />
        </DeckGL>
      </div>
    );
  }
}

export default Map;
