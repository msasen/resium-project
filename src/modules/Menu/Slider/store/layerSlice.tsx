import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { layer } from "@/data/opacity";
import { ILayer } from "@/interfaces/globe/Layer";

const initialState = layer;
const layerSlice = createSlice({
  name: "layer",
  initialState,
  reducers: {
    updateNatGeoWorldMap: (s, action: PayloadAction<ILayer>) => {
      return {
        ...s,
        NatGeo_World_Map: action.payload,
      };
    },
    updateWorldImagery: (s, action: PayloadAction<ILayer>) => {
      return {
        ...s,
        world_Imagery: action.payload,
      };
    },
    updateWorldPhysicalMap: (s, action: PayloadAction<ILayer>) => {
      return {
        ...s,
        world_Physical_Map: action.payload,
      };
    },
    updateWorldShadedRelief: (s, action: PayloadAction<ILayer>) => {
      return {
        ...s,
        world_Shaded_Relief: action.payload,
      };
    },
    updateworldStreetMap: (s, action: PayloadAction<ILayer>) => {
      return {
        ...s,
        world_Street_Map: action.payload,
      };
    },
    updateWorldWTerrainBase: (s, action: PayloadAction<ILayer>) => {
      return {
        ...s,
        world_Terrain_Base: action.payload,
      };
    },
    updateworldTopoMap: (s, action: PayloadAction<ILayer>) => {
      return {
        ...s,
        world_Topo_Map: action.payload,
      };
    },
  },
});

export default layerSlice;
