import {
  IThreeDimensionalCoordinate,
  IThreeDimensionalCoordinateHeader,
} from "@/interfaces/common/index";
// TODO2 Dataseti helpers olmadan çalışır hale getir
// önce lon yaz
const theWhiteHouse: IThreeDimensionalCoordinate = {
  twoDimensionalCoordinates: [44.296185, 39.70665],
  alt: 10000,
};

const theWhiteHouseHeader: IThreeDimensionalCoordinateHeader = {
  cordinate: theWhiteHouse,
  context: "go to the White House",
  icons: "",
  key: 1,
};

const mavinci: IThreeDimensionalCoordinate = {
  twoDimensionalCoordinates: [32.737501, 39.863055],
  alt: 10000,
};

const mavinciHeader: IThreeDimensionalCoordinateHeader = {
  cordinate: mavinci,
  context: "go to mavinci",
  icons: "",
  key: 1,
};

const anıtkabir: IThreeDimensionalCoordinate = {
  twoDimensionalCoordinates: [32.834754, 39.92339],
  alt: 10000,
};

const anıtkabirHeader: IThreeDimensionalCoordinateHeader = {
  cordinate: anıtkabir,
  context: "go to anıtkabir",
  icons: "",
  key: 1,
};

const beyogli: IThreeDimensionalCoordinate = {
  twoDimensionalCoordinates: [28.984707, 41.03373],
  alt: 10000,
};

const beyogliHeader: IThreeDimensionalCoordinateHeader = {
  cordinate: theWhiteHouse,
  context: "go to beyogli",
  icons: "",
  key: 1,
};

const state = [beyogliHeader, anıtkabirHeader, mavinciHeader, theWhiteHouseHeader];

export { beyogli, anıtkabir, mavinci, theWhiteHouse, state };
