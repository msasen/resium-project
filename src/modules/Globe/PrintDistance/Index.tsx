import turfArea from "@turf/area";
import turfCenterOfMass from "@turf/center-of-mass";
import { Color, Transforms, Cartesian3, DistanceDisplayCondition, HeightReference } from "cesium";
import { Fragment } from "react";
import { Label, LabelCollection } from "resium";

import calculateMidPoint from "@/helpers/Math/calculateMidPoint";
import haversineDistance from "@/helpers/Math/haversine";
import { useSelector } from "@/hooks/storeHook";

type Props = {};
interface Coordinates {
  latitude: number;
  longitude: number;
}
type IdistanceInfo = {
  distance: number;
  mid: {
    lng: number;
    lat: number;
  };
};
const PrintDistance = (_props: Props) => {
  const data = useSelector(store => store.drawSlice);
  const { drawings } = data;
  const distances: IdistanceInfo[] = [];
  drawings.map(drawing => {
    //Tüm çizimlerin ayrı ayrı parse edilmesi = drawing
    //console.log(drawing);
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
          distance: parseInt((distance * 100).toString()),
          mid: calculateMidPoint(dataA, dataB),
        };
        distances.push(distanceInfo);

        i++;
        if (coordinates[i + 1] === undefined) break;
      }
    }
  });
  console.log(distances);
  return (
    <Fragment>
      {distances.map((data, i) => (
        <LabelCollection
          key={i}
          modelMatrix={Transforms.eastNorthUpToFixedFrame(
            Cartesian3.fromDegrees(data.mid.lng, data.mid.lat),
          )}>
          {data.distance < 10 ? (
            <Label
              fillColor={Color.RED}
              heightReference={HeightReference.CLAMP_TO_GROUND}
              distanceDisplayCondition={new DistanceDisplayCondition(1, 700)}
              text={`${data.distance.toString()} m.`}
              scale={1.2}
              font={"Arial"}
              horizontalOrigin={90}
            />
          ) : data.distance < 50 ? (
            <Label
              fillColor={Color.RED}
              heightReference={HeightReference.CLAMP_TO_GROUND}
              distanceDisplayCondition={new DistanceDisplayCondition(1, 3500)}
              text={`${data.distance.toString()} m.`}
              scale={1.2}
              font={"Arial"}
              horizontalOrigin={90}
            />
          ) : data.distance < 150 ? (
            <Label
              fillColor={Color.RED}
              heightReference={HeightReference.CLAMP_TO_GROUND}
              distanceDisplayCondition={new DistanceDisplayCondition(1, 7000)}
              text={`${data.distance.toString()} m.`}
              scale={1.2}
              font={"Arial"}
              horizontalOrigin={90}
            />
          ) : data.distance < 500 ? (
            <Label
              fillColor={Color.RED}
              heightReference={HeightReference.CLAMP_TO_GROUND}
              distanceDisplayCondition={new DistanceDisplayCondition(1, 50000)}
              text={`${data.distance.toString()} m.`}
              scale={1.2}
              font={"Arial"}
              horizontalOrigin={90}
            />
          ) : data.distance < 2500 ? (
            <Label
              fillColor={Color.RED}
              heightReference={HeightReference.CLAMP_TO_GROUND}
              distanceDisplayCondition={new DistanceDisplayCondition(1, 200000)}
              text={`${data.distance.toString()} m.`}
              scale={1.2}
              font={"Arial"}
              horizontalOrigin={90}
            />
          ) : data.distance < 10000 ? (
            <Label
              fillColor={Color.RED}
              heightReference={HeightReference.CLAMP_TO_GROUND}
              distanceDisplayCondition={new DistanceDisplayCondition(1, 600000)}
              text={`${data.distance.toString()} m.`}
              scale={1.2}
              font={"Arial"}
              horizontalOrigin={90}
            />
          ) : data.distance < 100000 ? (
            <Label
              fillColor={Color.RED}
              heightReference={HeightReference.CLAMP_TO_GROUND}
              distanceDisplayCondition={new DistanceDisplayCondition(1, 6000000)}
              text={`${data.distance.toString()} m.`}
              scale={1.2}
              font={"Arial"}
              horizontalOrigin={90}
            />
          ) : data.distance > 100000 ? (
            <Label
              fillColor={Color.RED}
              heightReference={HeightReference.CLAMP_TO_GROUND}
              distanceDisplayCondition={new DistanceDisplayCondition(1, 600000)}
              text={`${data.distance.toString()} m.`}
              scale={1.2}
              font={"Arial"}
              horizontalOrigin={90}
            />
          ) : null}
        </LabelCollection>
      ))}
      )
    </Fragment>
  );
};

export default PrintDistance;
