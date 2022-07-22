import { Camera } from "cesium";

type Options = Parameters<Camera["flyTo"]>[0];

export type CameraFlyToProps = Omit<Options, "complete" | "cancel"> & {
  onComplete?: Options["complete"];
  onCancel?: Options["cancel"];
  cancelFlightOnUnmount?: boolean;
  once?: boolean;
};

export interface Icordinate {
  lat: number;
  lon: number;
  alt: number;
}
