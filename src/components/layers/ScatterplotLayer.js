import {ScatterplotLayer} from '@deck.gl/layers';


const scatterPlotData = [
    {name: 'Charing Cross', code:'CC', address: 'Charing Cross', exits: 4214, coordinates: [-0.118092, 51.509865]},
    {name: 'new point', code:'CC', address: 'new point', exits: 4214, coordinates: [-0.128092, 51.519865]},
]


const LAYER_SCATTERPLOT = new ScatterplotLayer({
    id: 'scatterplot-layer',
    data: scatterPlotData,
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
    getFillColor: d => [43, 187, 255],
    getLineColor: d => [0, 0, 0],
    onHover: ({object, x, y}) => {
      const tooltip = `${object.name}\n${object.address}`;
    }
  });

  export default LAYER_SCATTERPLOT;
