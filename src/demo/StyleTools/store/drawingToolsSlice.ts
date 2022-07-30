import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { state, IActiveButton } from "./state";

const initialState = state;
const styleToolsSlice = createSlice({
  name: "styleTools",
  initialState,
  reducers: {
    update: (state, action: PayloadAction<IActiveButton>) => {
      return {
        ...state,
        activeButton: [...state.activeButton, action.payload],
      };
    },
  },
});

export default styleToolsSlice;
