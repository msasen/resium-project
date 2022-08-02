import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Color } from "cesium";

import { state, ICoordinates, IDrawings, IDrawWithColor } from "./state";

const initialState: IDrawings = state;

const DrawSlice = createSlice({
  name: "draw",
  initialState,
  reducers: {
    addShape: (state, action: PayloadAction<IDrawWithColor>) => {
      const lastNode = state.drawings[state.drawings.length - 1];
      lastNode != undefined
        ? lastNode.data.features[0].geometry.coordinates.length === 0 ||
          lastNode.data.features[0].geometry.coordinates.length === 1
          ? state.drawings.pop()
          : null
        : null;
      state.drawings.push(action.payload);
      return state;
    },
    addPoitIOnLastLine: (s, action: PayloadAction<ICoordinates>) => {
      const state: IDrawings = s;
      const lastNode = state.drawings[state.drawings.length - 1];
      lastNode.data.features[0].geometry.coordinates.push(action.payload);
      return state;
    },
    addPoitIOnLastPolygon: (s, action: PayloadAction<ICoordinates>) => {
      const state: IDrawings = s;
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
    updateStroke: (s, action: PayloadAction<number>) => {
      const state: IDrawings = s;
      const lastNode = state.drawings[state.drawings.length - 1];
      lastNode.stroke = action.payload;
    },
    updateColor: (s, action: PayloadAction<string>) => {
      const state: IDrawings = s;
      const lastNode = state.drawings[state.drawings.length - 1];
      action.payload === "YELLOW" ? (lastNode.color = Color.YELLOW) : null;
      action.payload === "DARKGREEN" ? (lastNode.color = Color.DARKGREEN) : null;
      action.payload === "BLACK" ? (lastNode.color = Color.BLACK) : null;
      action.payload === "BLUE" ? (lastNode.color = Color.BLUE) : null;
      action.payload === "BROWN" ? (lastNode.color = Color.BROWN) : null;
      action.payload === "CYAN" ? (lastNode.color = Color.CYAN) : null;
      action.payload === "MAGENTA" ? (lastNode.color = Color.MAGENTA) : null;
      action.payload === "RED" ? (lastNode.color = Color.RED) : null;
    },
    TakeBackDrawing: s => {
      const state: IDrawings = s;
      state.drawings.pop();
      return state;
    },
    TakeBackCordinate: s => {
      const state: IDrawings = s;
      const lastNode = state.drawings[state.drawings.length - 1];
      lastNode.data.features[0].geometry.coordinates.pop();
      return state;
    },
  },
});

export default DrawSlice;
