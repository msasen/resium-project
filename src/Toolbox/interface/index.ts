import { Cartesian2 } from "cesium";

export interface IhandleMouseMoveEvent {
  position: Cartesian2;
  endPosition?: Cartesian2;
}

export interface IeventHandler {
  ref: any;
}
type IgetMousePointPosition =
  | {
      long: number;
      lat: number;
      height: number;
      elevation: number;
    }
  | undefined;

type IgetMousePointPositionReducers = {
  long: number;
  lat: number;
  height: number;
  elevation: number;
};

type IDrawLine = {
  firstCordinate: {
    lat: number;
    lon: number;
  };
  secondCordinate: {
    lat: number;
    lon: number;
  };
};
type IFirst = {
  lat: number;
  lon: number;
};
type red = IFirst;

type Iref = { current: any | HTMLDivElement };

export type {
  Iref,
  red,
  IDrawLine,
  IFirst,
  IgetMousePointPosition,
  IgetMousePointPositionReducers,
};
