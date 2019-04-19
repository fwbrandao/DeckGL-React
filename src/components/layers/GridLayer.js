import DeckGL, {GridLayer} from 'deck.gl';

// Data to be used by the POLYLayer
const gridData = [
    {COORDINATES: [-122.42177834, 37.78346622]},
];

const LAYER_GRID = new GridLayer({
  id: "grid-layer",
  data: gridData,
  pickable: true,
  extruded: true,
  cellSize: 200,
  elevationScale: 4,
  getPosition: d => d.COORDINATES,
  getLineColor: [80, 80, 80],
  getFillColor: [255, 80, 80],
  getLineWidth: 250
});
export default LAYER_GRID;