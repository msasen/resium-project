import { Cartesian3 } from "cesium";
import { CameraFlyTo } from "resium";

import { useCounterSelector } from "@/hooks/storeHook";

type Props = {};

const CametraAnimation = (args: Props) => {
  const { lat, lon, alt } = useCounterSelector(state => state.map);
  const cordinate = Cartesian3.fromDegrees(lat, lon, alt);
  return <CameraFlyTo {...args} destination={cordinate} />;
};

export default CametraAnimation;
