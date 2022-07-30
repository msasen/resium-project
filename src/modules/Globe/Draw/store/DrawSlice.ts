import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Color } from "cesium";

import { state, ICoordinates, IDrawings, IDrawWithColor } from "./state";

const initialState: IDrawings = state;

const DrawSlice = createSlice({
  name: "draw",
  initialState,
  reducers: {
    addShape: (state, action: PayloadAction<IDrawWithColor>) => {
      return {
        ...state,
        drawings: [...state.drawings, action.payload],
      };
    },
    addPoitIOnLastLine: (s, action: PayloadAction<ICoordinates>) => {
      const state: IDrawings = s;
      const lastNode = state.drawings[state.drawings.length - 1];
      lastNode.color = Color.BLUE;
      lastNode.data.features[0].geometry.coordinates.push(action.payload);
      return state;
    },
    addPoitIOnLastPolygon: (s, action: PayloadAction<ICoordinates>) => {
      const state: IDrawings = s;
      state.drawings[state.drawings.length - 1].color = Color.RED;
      state.drawings[state.drawings.length - 1].data.features[0].geometry.coordinates[
        state.drawings[state.drawings.length - 1].data.features[0].geometry.coordinates.length - 1
      ] = action.payload;
      const firstCoordinate =
        state.drawings[state.drawings.length - 1].data.features[0].geometry.coordinates[0];
      state.drawings[state.drawings.length - 1].data.features[0].geometry.coordinates.push(
        firstCoordinate,
      );
      return state;
    },
    //Bur
  },
});

export default DrawSlice;
