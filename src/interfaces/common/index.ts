/**
 * Common interface ortak bir yapı oluşturmayı hedeflemektedir.
 *
 */
// TODO : 1 BUNU FİXLE HER YERDE BU FORMATI KULLAN
import { ReactNode } from "react";

export type ITwoDimensionalCoordinate = [number, number];
export type ITWoDimensionalCoordinateHeader = {
  cordinant: ITwoDimensionalCoordinate;
};
export interface IThreeDimensionalCoordinate {
  twoDimensionalCoordinates: ITwoDimensionalCoordinate;
  alt: number;
}

export interface IThreeDimensionalCoordinateHeader {
  cordinate: IThreeDimensionalCoordinate;
  name: string;
  logo: ReactNode;
  id: number;
}
