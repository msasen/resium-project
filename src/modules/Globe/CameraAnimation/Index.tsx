import { Cartesian3 } from "cesium";
import { CameraFlyTo } from "resium";

import { useSelector } from "@/hooks/storeHook";

type Props = {};

const CametraAnimation = (args: Props) => {
  const { lat, lon, alt } = useSelector(state => state.map);
  const cordinate = Cartesian3.fromDegrees(lat, lon, alt);
  return <CameraFlyTo {...args} destination={cordinate} />;
};

export default CametraAnimation;
