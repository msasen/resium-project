import { Viewer as VieverResium } from "resium";

import Menu from "@/container/menu";
import CameraAnimation from "@/modules/CameraAnimation/Index";

type Props = {};

const Map = (_args: Props) => {
  return (
    <VieverResium full timeline={false} animation={false}>
      <div style={{ position: "absolute", bottom: 0, left: 0, width: "100vw" }}>
        <Menu />
      </div>
      <CameraAnimation />
    </VieverResium>
  );
};

export default Map;
