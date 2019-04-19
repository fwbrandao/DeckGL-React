import { PolygonLayer } from "deck.gl";

// Data to be used by the POLYLayer
const polygonData = [
  {
    contours: [[-122.4, 37.7], [-122.4, 37.8], [-122.5, 37.8], [-122.5, 37.7], [-122.4, 37.7]],
    zipcode: 94107,
    population: 26599,
    area: 6.11,
    name: "firstPolygon"
  },
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
  getFillColor: [255, 80, 80],
  getLineWidth: 250
});
export default LAYER_POLY;


/* 

 Data format:
   * [
   *   {
   *     // Simple polygon (array of coords)
   *     contour: [[-122.4, 37.7], [-122.4, 37.8], [-122.5, 37.8], [-122.5, 37.7], [-122.4, 37.7]],
   *     zipcode: 94107,
   *     population: 26599,
   *     area: 6.11
   *   },
   *   {
   *     // Complex polygon with holes (array of rings)
   *     contour: [
   *       [[-122.4, 37.7], [-122.4, 37.8], [-122.5, 37.8], [-122.5, 37.7], [-122.4, 37.7]],
   *       [[-122.45, 37.73], [-122.47, 37.76], [-122.47, 37.71], [-122.45, 37.73]]
   *     ],
   *     zipcode: 94107,
   *     population: 26599,
   *     area: 6.11
   *   },
   *   ...
   * ]
   * */