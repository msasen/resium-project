import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { data } from "./data";
import { ICoordinates, IData, IFeature } from "./type";

const initialState: IData = data;

const DrawSlice = createSlice({
  name: "draw",
  initialState,
  reducers: {
    addShape: (state, action: PayloadAction<IFeature>) => {
      return {
        ...state,
        features: [...state.features, action.payload],
      };
    },
    addPoitIOnLastLine: (s, action: PayloadAction<ICoordinates>) => {
      const state: IData = s;
      const lastNode = state.features[state.features.length - 1];
      lastNode.geometry.coordinates.push(action.payload);
      return state;
    },
    addPoitIOnLastPolygon: (s, action: PayloadAction<ICoordinates>) => {
      const state: IData = s;
      state.features[state.features.length - 1].geometry.coordinates[
        state.features[state.features.length - 1].geometry.coordinates.length - 1
      ] = action.payload;
      const firstCoordinate = state.features[state.features.length - 1].geometry.coordinates[0];
      state.features[state.features.length - 1].geometry.coordinates.push(firstCoordinate);
      return state;
    },
    //Bur
  },
});

export default DrawSlice;
