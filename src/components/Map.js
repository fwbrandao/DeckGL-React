import React, { Component } from 'react';
import DeckGL, {LineLayer} from 'deck.gl';
import {StaticMap} from 'react-map-gl';
import LAYER_POLY from './PolygonLayer'

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

// Data to be used by the LineLayer
const data = [{sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781]}];

class Map extends Component {
  render() {
    const layers = [
      new LineLayer({id: 'line-layer', data})
    ];

    return (
      <DeckGL
        initialViewState={initialViewState}
        controller={true}
        layers={LAYER_POLY}
      >
        <StaticMap mapboxApiAccessToken={MAPBOX_TOKEN} />
      </DeckGL>
    );
  }
}

export default Map