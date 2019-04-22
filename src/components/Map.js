import React, { Component } from "react";
import DeckGL from "deck.gl";
import { StaticMap } from "react-map-gl";
import LAYER_POLY from "./layers/PolygonLayer";
import LAYER_GRID from "./layers/GridLayer";
import LAYER_LINEAR from "./layers/Linelayer";
import LAYER_SCATTERPLOT from "./layers/ScatterplotLayer";
import FlightLayer from './layers/FlightLayer';

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoibWF0dGhhdXNlbiIsImEiOiJjanVvaDF1N2UweGlyM3ltdTZ1c2U3YWdvIn0.fWPrCVx2EAnHIyKgwZdP1Q";

const initialViewState = {
  longitude: -0.118092,
  latitude: 51.509865,
  zoom: 13,
  pitch: 0,
  bearing: 0
};

class Map extends Component {
  render() {
    return (<div>
      <DeckGL
        initialViewState={initialViewState}
        controller={true}
        layers={FlightLayer}
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
