/**
 * Common interface ortak bir yapı oluşturmayı hedeflemektedir.
 *
 */
// TODO : 1 BUNU FİXLE HER YERDE BU FORMATI KULLAN
import { ReactNode } from "react";

export type ITwoDimensionalCoordinate = [number, number];

export interface IThreeDimensionalCoordinate {
  twoDimensionalCoordinates: ITwoDimensionalCoordinate;
  alt: number;
}

export type ITWoDimensionalCoordinateHeader = {
  cordinant: ITwoDimensionalCoordinate;
};
export interface IThreeDimensionalCoordinateHeader {
  cordinate: IThreeDimensionalCoordinate;
  context: string;
  key: number;
  icons: ReactNode;
}
