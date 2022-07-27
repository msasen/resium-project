import { ScreenSpaceEventType } from "cesium";
import { useEffect, useRef, useState } from "react";
import { Viewer as VieverResium, ScreenSpaceEventHandler, ScreenSpaceEvent } from "resium";

import Menu from "@/container/menu";
import { useCounterDispatch } from "@/hooks/storeHook";
import CameraAnimation from "@/modules/CameraAnimation/Index";
import positionSlice from "@/store/slice/positionData";
import Line from "@/Toolbox/components/Line/Index";
import { getMousePointPosition } from "@/Toolbox/Helpers/getMousePointPosition";
import { Toolbox } from "@/Toolbox/Index";
import { Iref } from "@/Toolbox/interface";

import AddImageryProviderModule from "../AddImageryProvider/Index";

type Props = {};
const Map = (_args: Props) => {
  const ref: Iref = useRef(null);
  const [getRef, setRef] = useState(ref);
  // const [getPosition, setPosition] = useState<IgetMousePointPosition>();
  useEffect(() => {
    if (ref.current?.cesiumElement) {
      setRef(ref);
    }
  }, []);
  /**
   * // TODO 3:
   * Viewden alınan ref'i store'a kaydet ki ulaşması kolay olsun
   * // TODO 4:
   * ScreenSpaceEventHandler'ı Event hendler modülüne taşı ve
   * bunun için yapılacaklar 3 de bahsedilen ref'i kullan
   * // TODO 5:
   * Geçici çözüm olarak positionData props olarak menü ve toolbox'a verildi
   * Bunu store ile yap
   * */
  const dispatch = useCounterDispatch();
  const handleMouseMoveEvent = (params: any) => {
    const { endPosition } = params;
    if (getRef.current === null) return;
    const camera = getRef.current.cesiumElement.camera;
    const globe = getRef.current.cesiumElement.scene.globe;
    const positionData: any = getMousePointPosition(camera, globe, endPosition);
    // setPosition(positionData);
    const { update } = positionSlice.actions;
    dispatch(update(positionData));
    console.log(positionData);
  };

  return (
    <VieverResium full timeline={false} animation={false} ref={ref}>
      <AddImageryProviderModule />
      <div style={{ position: "absolute", bottom: 0, left: 0, width: "100vw" }}>
        <Menu />
      </div>
      <Toolbox />
      {/* <EventHandler ref={getRef} /> */}
      {/* mause hareket ettirildiğinde alt componentler yeniden render olmuyor. */}
      <ScreenSpaceEventHandler>
        <ScreenSpaceEvent action={handleMouseMoveEvent} type={ScreenSpaceEventType.MOUSE_MOVE} />
      </ScreenSpaceEventHandler>
      <CameraAnimation />
      <Line />
    </VieverResium>
  );
};

export default Map;
