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
export interface IData {
  type: string;
  features: IFeature[];
}
export type { ICoordinates };
