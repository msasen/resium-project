import { Slider as AntdSlider } from "antd";

import { Frame } from "@/enum";
import { useDispatch } from "@/hooks/storeHook";
import { ILayer } from "@/interfaces/globe/Layer";
import layerSlice from "@/modules/Menu/Slider/store/layerSlice";

type ISlider = {
  disabled: boolean;
  id: string;
};

const Slider = (props: ISlider) => {
  const { disabled, id } = props;

  const dispatch = useDispatch();
  const {
    updateNatGeoWorldMap,
    updateWorldImagery,
    updateWorldPhysicalMap,
    updateWorldShadedRelief,
    updateWorldWTerrainBase,
    updateworldStreetMap,
    updateworldTopoMap,
  } = layerSlice.actions;
  function getValue(params: number) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const layer: ILayer = {
      opacity: params / 100,
      visibility: !disabled,
    };

    if (id === Frame.world_Imagery) {
      dispatch(updateNatGeoWorldMap(layer));
    }
    if (id === Frame.world_Physical_Map) {
      dispatch(updateWorldImagery(layer));
    }
    if (id === Frame.world_Shaded_Relief) {
      dispatch(updateWorldPhysicalMap(layer));
    }
    if (id === Frame.world_Street_Map) {
      dispatch(updateWorldShadedRelief(layer));
    }
    if (id === Frame.world_Terrain_Base) {
      dispatch(updateWorldWTerrainBase(layer));
    }
    if (id === Frame.world_Topo_Map) {
      dispatch(updateworldStreetMap(layer));
    }
    if (id === Frame.NatGeo_World_Map) {
      dispatch(updateworldTopoMap(layer));
    }
  }
  return <AntdSlider defaultValue={30} onChange={value => getValue(value)} disabled={disabled} />;
};

export default Slider;
