// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ScreenSpaceEventType, Resource } from "cesium";
import { useEffect, useRef, useState } from "react";
import { Viewer as VieverResium, ScreenSpaceEventHandler, ScreenSpaceEvent } from "resium";

import Menu from "@/container/Menu/Index";
import { getMousePointPosition } from "@/helpers/getMousePointPosition";
import { useDispatch } from "@/hooks/storeHook";
import { Iref } from "@/interfaces/Toolbox/Toolbox";
import CameraAnimation from "@/modules/Globe/goOnGlobe/Index";
import positionSlice from "@/store/slice/positionData";

import Draw from "../Draw/Index";
import AddImageryProviderModule from "../ImageryLayer/Index";
import PrintDistance from "../PrintDistance/Index";

type Props = {};
const Map = (_args: Props) => {
  const ref: Iref = useRef(null);
  const [getRef, setRef] = useState(ref);
  // const [getPosition, setPosition] = useState<IgetMousePointPosition>();
  useEffect(() => {
    if (ref.current?.cesiumElement) {
      getRef.current.cesiumElement.scene.globe.depthTestAgainstTerrain = true;
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
  const dispatch = useDispatch();
  const handleMouseMoveEvent = (params: any) => {
    const { position } = params;
    if (getRef.current === null) return;
    const camera = getRef.current.cesiumElement.camera;
    const globe = getRef.current.cesiumElement.scene.globe;
    const scane = getRef.current.cesiumElement.scene;
    const positionData: any = getMousePointPosition(camera, globe, position, scane);
    // setPosition(positionData);
    const { update } = positionSlice.actions;
    dispatch(update(positionData));
  };

  return (
    <VieverResium full timeline={false} animation={false} ref={ref}>
      <AddImageryProviderModule />
      <div style={{ position: "absolute", bottom: 0, left: 0, width: "100vw" }}>
        <Menu />
      </div>
      <PrintDistance />
      <ScreenSpaceEventHandler>
        <ScreenSpaceEvent action={handleMouseMoveEvent} type={ScreenSpaceEventType.LEFT_CLICK} />
      </ScreenSpaceEventHandler>
      <CameraAnimation />
      <Draw />
    </VieverResium>
  );
};

export default Map;
