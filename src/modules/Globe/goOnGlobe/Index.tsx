import { Cartesian3 } from "cesium";
import { CameraFlyTo } from "resium";

import { useSelector } from "@/hooks/storeHook";

type Props = {};

const CametraAnimation = (args: Props) => {
  const { twoDimensionalCoordinates, alt } = useSelector(state => state.goOnGlobe);
  const cordinate = Cartesian3.fromDegrees(
    twoDimensionalCoordinates[0],
    twoDimensionalCoordinates[1],
    alt,
  );
  return <CameraFlyTo {...args} destination={cordinate} />;
};

export default CametraAnimation;
