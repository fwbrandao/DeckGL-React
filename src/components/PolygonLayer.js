// examplePolygonLayer.js
import { PolygonLayer } from "deck.gl";

// Data to be used by the POLYLayer
const polygonData = [
  {
    contours: [
      [-91.72307036099997, 31.814196736000035],
      [-122.41669, 37.781],
      [-95.52274057225983, 30.131426214982195],
      [-91.72307036099997, 31.814196736000035]
    ],
    name: "firstPolygon"
  }
];

const LAYER_POLY = new PolygonLayer({
  id: "poly-layers",
  data: polygonData,
  stroked: true,
  filled: true,
  extruded: false,
  wireframe: true,
  lineWidthMinPixels: 1,
  getPolygon: d => d.contours,
  getLineColor: [80, 80, 80],
  getFillColor: [80, 80, 80],
  getLineWidth: 250
});
export default LAYER_POLY;