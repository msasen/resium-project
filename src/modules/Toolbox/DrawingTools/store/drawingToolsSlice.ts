import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { state, IActiveButton } from "./state";

const initialState = state;
const drawingToolsSlice = createSlice({
  name: "drawingTools",
  initialState,
  reducers: {
    update: (state, action: PayloadAction<IActiveButton>) => {
      return {
        ...state,
        activeButton: [...state.activeButton, action.payload],
      };
    },
    UpdateActiveColorButton: (state, action: PayloadAction<string>) => {
      ////console.log(action.payload);
      return {
        ...state,
        activeColorButton: action.payload,
      };
    },
  },
});

export default drawingToolsSlice;
