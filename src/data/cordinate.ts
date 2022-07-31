import {
  IThreeDimensionalCoordinate,
  IThreeDimensionalCoordinateHeader,
} from "@/interfaces/common/index";
// TODO2 Dataseti helpers olmadan çalışır hale getir
// önce lon yaz
const theWhiteHouse: IThreeDimensionalCoordinate = {
  twoDimensionalCoordinates: [-77.037088, 38.897125],
  alt: 10000,
};

const theWhiteHouseHeader: IThreeDimensionalCoordinateHeader = {
  cordinate: theWhiteHouse,
  name: "the White House",
  logo: "",
  id: 1,
};

const mavinci: IThreeDimensionalCoordinate = {
  twoDimensionalCoordinates: [32.737501, 39.863055],
  alt: 10000,
};

const mavinciHeader: IThreeDimensionalCoordinateHeader = {
  cordinate: mavinci,
  name: "mavinci",
  logo: "",
  id: 1,
};

const anıtkabir: IThreeDimensionalCoordinate = {
  twoDimensionalCoordinates: [32.834754, 39.92339],
  alt: 10000,
};

const anıtkabirHeader: IThreeDimensionalCoordinateHeader = {
  cordinate: anıtkabir,
  name: "anıtkabir",
  logo: "",
  id: 1,
};

const beyogli: IThreeDimensionalCoordinate = {
  twoDimensionalCoordinates: [28.984707, 41.03373],
  alt: 10000,
};

const beyogliHeader: IThreeDimensionalCoordinateHeader = {
  cordinate: theWhiteHouse,
  name: "beyogli",
  logo: "",
  id: 1,
};

const cordinateList = [beyogliHeader, anıtkabirHeader, mavinciHeader, theWhiteHouseHeader];

export { beyogli, anıtkabir, mavinci, theWhiteHouse, cordinateList };
