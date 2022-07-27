import { Slider as AntdSlider } from "antd";

import { Frame } from "@/enum";
import { useCounterDispatch } from "@/hooks/storeHook";
import { ILayer } from "@/interfaces/Opacity";
import opacitySlice from "@/store/slice/opacitySlice";

type ISlider = {
  disabled: boolean;
  id: string;
};

const Slider = (props: ISlider) => {
  const { disabled, id } = props;

  const dispatch = useCounterDispatch();
  const {
    NatGeo_World_Map,
    world_Imagery,
    world_Physical_Map,
    world_Shaded_Relief,
    world_Street_Map,
    world_Terrain_Base,
    world_Topo_Map,
  } = opacitySlice.actions;
  function getValue(params: number) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const layer: ILayer = {
      opacity: params / 100,
      visibility: !disabled,
    };

    if (id === Frame.world_Imagery) {
      dispatch(world_Imagery(layer));
    }
    if (id === Frame.world_Physical_Map) {
      dispatch(world_Physical_Map(layer));
    }
    if (id === Frame.world_Shaded_Relief) {
      dispatch(world_Shaded_Relief(layer));
    }
    if (id === Frame.world_Street_Map) {
      dispatch(world_Street_Map(layer));
    }
    if (id === Frame.world_Terrain_Base) {
      dispatch(world_Terrain_Base(layer));
    }
    if (id === Frame.world_Topo_Map) {
      dispatch(world_Topo_Map(layer));
    }
    if (id === Frame.NatGeo_World_Map) {
      dispatch(NatGeo_World_Map(layer));
    }
  }
  return <AntdSlider defaultValue={30} onChange={value => getValue(value)} disabled={disabled} />;
};

export default Slider;
