import { Color } from "cesium";

type ICoordinates = any[];

export interface IGeometry {
  type: string;
  coordinates: ICoordinates;
}
export interface IFeature {
  type: string;
  properties: any;
  geometry: IGeometry;
}
export interface IDrawing {
  type: string;
  features: IFeature[];
}
export interface IDrawWithColor {
  data: IDrawing;
  color: Color;
}
export type { ICoordinates };

export interface IDrawings {
  drawings: IDrawWithColor[];
}

const state: IDrawings = {
  drawings: [],
};

export { state };
