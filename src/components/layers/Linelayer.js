import DeckGL, {LineLayer} from 'deck.gl';

// Data to be used by the LineLayer
const data = [{sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781]}];

const LAYER_LINEAR = [
    new LineLayer({id: 'line-layer', data})
  ];
export default LAYER_LINEAR;