import React, { Component } from 'react';
import DeckGL from 'deck.gl';
import {StaticMap} from 'react-map-gl';
import LAYER_POLY from './layers/PolygonLayer'
import LAYER_GRID from './layers/GridLayer';
import LAYER_LINEAR from './layers/Linelayer';

// Set your mapbox access token here
const MAPBOX_TOKEN = 'pk.eyJ1IjoibWF0dGhhdXNlbiIsImEiOiJjanVvaDF1N2UweGlyM3ltdTZ1c2U3YWdvIn0.fWPrCVx2EAnHIyKgwZdP1Q';


// Initial viewport settings
const initialViewState = {
  longitude: -122.41669,
  latitude: 37.7853,
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
        layers={LAYER_GRID}
      >
        <StaticMap mapboxApiAccessToken={MAPBOX_TOKEN} />
      </DeckGL>
    );
  }
}

export default Map