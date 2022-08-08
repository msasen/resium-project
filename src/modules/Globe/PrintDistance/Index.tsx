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
      <Labels distance={1000000} text={`${data.distance.toString()} m.`} />
    </LabelCollection>
  );
});

export default PrintDistance;
