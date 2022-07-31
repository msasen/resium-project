import { ReactNode } from "react";

export interface Icordinate {
  lat: number;
  lon: number;
  alt: number;
}

export interface IcordinateHeader {
  cordinate: Icordinate;
  name: string;
  logo: ReactNode;
  id: number;
}
