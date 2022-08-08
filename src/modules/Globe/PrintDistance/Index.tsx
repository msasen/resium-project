import { Transforms, Cartesian3 } from "cesium";
import { Fragment, Key, useState, useEffect, memo } from "react";
import { LabelCollection } from "resium";

import Labels from "@/components/Globe/Label/Index";
import { IdistanceInfo, calculateDistanceAndArea } from "@/helpers/calculateDistanceAndArea";
import { useSelector } from "@/hooks/storeHook";

type Props = {};

const PrintDistance = (_props: Props) => {
  const data = useSelector(store => store.drawSlice);
  const [distances, setDistances] = useState<IdistanceInfo[]>([]);
  const { drawings } = data;

  useEffect(() => {
    const ret = calculateDistanceAndArea(drawings);
    setDistances(ret);
  }, [drawings]);
  return (
    <Fragment>
      {distances.map(
        (
          data: { mid: { lng: number; lat: number }; distance: number },
          i: Key | null | undefined,
        ) => (
          <Print key={i} data={data} />
        ),
      )}
      )
    </Fragment>
  );
};

const Print = memo(function Print(props: any) {
  const { data } = props;
  return (
    <LabelCollection
      modelMatrix={Transforms.eastNorthUpToFixedFrame(
        Cartesian3.fromDegrees(data.mid.lng, data.mid.lat),
      )}>
      {data.distance < 100 ? (
        <Labels distance={700} text={`${data.distance.toString()} m.`} />
      ) : data.distance < 100 ? (
        <Labels distance={3500} text={`${data.distance.toString()} m.`} />
      ) : data.distance < 500 ? (
        <Labels distance={7000} text={`${data.distance.toString()} m.`} />
      ) : data.distance < 1500 ? (
        <Labels distance={50000} text={`${data.distance.toString()} m.`} />
      ) : data.distance < 5000 ? (
        <Labels distance={200000} text={`${data.distance.toString()} m.`} />
      ) : data.distance < 25000 ? (
        <Labels distance={600000} text={`${data.distance.toString()} m.`} />
      ) : data.distance < 100000 ? (
        <Labels distance={1000000} text={`${data.distance.toString()} m.`} />
      ) : data.distance > 1000000 ? (
        <Labels distance={600000} text={`${data.distance.toString()} m.`} />
      ) : null}
    </LabelCollection>
  );
});

export default PrintDistance;
