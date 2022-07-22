import { Icordinate, IcordinateHeader } from "@/interfaces/Iresium";

const theWhiteHouse: Icordinate = {
  lat: -77.037088,
  lon: 38.897125,
  alt: 100,
};

const theWhiteHouseHeader: IcordinateHeader = {
  cordinate: theWhiteHouse,
  name: "the White House",
  logo: "",
  id: 1,
};

const mavinci: Icordinate = {
  lat: 32.737501,
  lon: 39.863055,
  alt: 100,
};

const mavinciHeader: IcordinateHeader = {
  cordinate: mavinci,
  name: "mavinci",
  logo: "",
  id: 1,
};

const anıtkabir: Icordinate = {
  lat: 32.834754,
  lon: 39.92339,
  alt: 100,
};

const anıtkabirHeader: IcordinateHeader = {
  cordinate: anıtkabir,
  name: "anıtkabir",
  logo: "",
  id: 1,
};

const beyogli: Icordinate = {
  lat: 28.984707,
  lon: 41.03373,
  alt: 100,
};

const beyogliHeader: IcordinateHeader = {
  cordinate: theWhiteHouse,
  name: "beyogli",
  logo: "",
  id: 1,
};

const cordinateList = [beyogliHeader, anıtkabirHeader, mavinciHeader, theWhiteHouseHeader];

export { beyogli, anıtkabir, mavinci, theWhiteHouse, cordinateList };
