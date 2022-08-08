import turfArea from "@turf/area";
import turfCenterOfMass from "@turf/center-of-mass";

import calculateMidPoint from "@/helpers/Math/calculateMidPoint";
import haversineDistance from "@/helpers/Math/haversine";

export type IdistanceInfo = {
  distance: number;
  mid: {
    lng: number;
    lat: number;
  };
};

interface Coordinates {
  latitude: number;
  longitude: number;
}

export const calculateDistanceAndArea = (drawings: any) => {
  const distances: IdistanceInfo[] = [];
  drawings.map((drawing: { data: { features: { geometry: { coordinates: any } }[] } }) => {
    //Tüm çizimlerin ayrı ayrı parse edilmesi = drawing
    // Aşağıdaki yapı anlamsız geliyorsa geojson araştırılmalıdır.
    // bir çizimin tüm kordinantlarını söyler bize
    const coordinates = drawing.data.features[0].geometry.coordinates;
    // Eğer çokgense son kordinatı aynı zamanda ilk kordinatıdır
    if (coordinates[0] === coordinates[coordinates.length - 1]) {
      // çokgen
      // çokgen için boş geojson yapısı
      if (coordinates[2] != null) {
        const polygon: any = {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {},
              geometry: {
                type: "Polygon",
                coordinates: [coordinates],
              },
            },
          ],
        };
        const area = turfArea(polygon);
        const center = turfCenterOfMass(polygon);
        const distanceInfo: IdistanceInfo = {
          distance: parseInt(area.toString()),
          mid: {
            lng: center.geometry.coordinates[0],
            lat: center.geometry.coordinates[1],
          },
        };
        distances.push(distanceInfo);
      }
    } else {
      // eslint-disable-next-line no-constant-condition
      let i = 0;
      while (coordinates.length - 1) {
        if (coordinates[1] === undefined) break;
        const dataA: Coordinates = {
          latitude: coordinates[i][1],
          longitude: coordinates[i][0],
        };
        const dataB: Coordinates = {
          latitude: coordinates[i + 1][1],
          longitude: coordinates[i + 1][0],
        };
        const distance = haversineDistance(dataA, dataB);
        const distanceInfo: IdistanceInfo = {
          distance: parseInt((distance * 1000).toString()),
          mid: calculateMidPoint(dataA, dataB),
        };
        distances.push(distanceInfo);
        i++;
        if (coordinates[i + 1] === undefined) break;
      }
    }
  });
  return distances;
};
