import React, { Component } from "react";
import DeckGL from "deck.gl";
import { StaticMap } from "react-map-gl";
import LAYER_POLY from "./layers/PolygonLayer";
import LAYER_GRID from "./layers/GridLayer";
import LAYER_LINEAR from "./layers/Linelayer";
import LAYER_SCATTERPLOT from "./layers/ScatterplotLayer";

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
    return (
      <DeckGL
        initialViewState={initialViewState}
        controller={true}
        layers={LAYER_SCATTERPLOT}
      >
        <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
      </DeckGL>
    );
  }
}

export default Map;
