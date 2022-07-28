import { IData, IFeature } from "./type";

const data: IData = {
  type: "FeatureCollection",
  features: [],
};
const polygone: IFeature = {
  type: "Feature",
  properties: {},
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [99.49218749999999, 62.2679226294176],
        [60.46875, 58.44773280389084],
        [113.203125, 59.712097173322924],
        [-63.203125, 59.712097173322924],
        [99.49218749999999, 62.2679226294176],
      ],
    ],
  },
};
const line: IFeature = {
  type: "Feature",
  properties: {},
  geometry: {
    type: "LineString",
    coordinates: [],
  },
};
data.features.push(polygone);
data.features.push(line);
export { data };
