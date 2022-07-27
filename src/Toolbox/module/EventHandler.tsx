import { ScreenSpaceEventType } from "cesium";
import { ScreenSpaceEventHandler, ScreenSpaceEvent } from "resium";

import { getMousePointPosition } from "../Helpers/getMousePointPosition";
import { IeventHandler } from "../interface";

const EventHandler = (props: IeventHandler) => {
  console.log(props);
  const handleMouseMoveEvent = (params: any) => {
    const { endPosition } = params;
    const camera = ref.camera;
    const globe = ref.scene.globe;
    // const positionData = getMousePointPosition(camera, globe, endPosition);
    // console.log(positionData);
  };
  return (
    <ScreenSpaceEventHandler>
      <ScreenSpaceEvent action={handleMouseMoveEvent} type={ScreenSpaceEventType.MOUSE_MOVE} />
    </ScreenSpaceEventHandler>
  );
};

export default EventHandler;
