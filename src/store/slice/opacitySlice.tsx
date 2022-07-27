import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { layer } from "@/data/opacity";
import { ILayer } from "@/interfaces/Opacity";

const initialState = layer;
const opacitySlice = createSlice({
  name: "opacity",
  initialState,
  reducers: {
    NatGeo_World_Map: (s, action: PayloadAction<ILayer>) => {
      return {
        ...s,
        NatGeo_World_Map: action.payload,
      };
    },
    world_Imagery: (s, action: PayloadAction<ILayer>) => {
      return {
        ...s,
        world_Imagery: action.payload,
      };
    },
    world_Physical_Map: (s, action: PayloadAction<ILayer>) => {
      return {
        ...s,
        world_Physical_Map: action.payload,
      };
    },
    world_Shaded_Relief: (s, action: PayloadAction<ILayer>) => {
      return {
        ...s,
        world_Shaded_Relief: action.payload,
      };
    },
    world_Street_Map: (s, action: PayloadAction<ILayer>) => {
      return {
        ...s,
        world_Street_Map: action.payload,
      };
    },
    world_Terrain_Base: (s, action: PayloadAction<ILayer>) => {
      return {
        ...s,
        world_Terrain_Base: action.payload,
      };
    },
    world_Topo_Map: (s, action: PayloadAction<ILayer>) => {
      return {
        ...s,
        world_Topo_Map: action.payload,
      };
    },
  },
});

export default opacitySlice;
