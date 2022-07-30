import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { state, IActiveButton } from "./state";

const initialState = state;
const toolBoxSlice = createSlice({
  name: "toolBox",
  initialState,
  reducers: {
    update: (state, action: PayloadAction<IActiveButton>) => {
      return {
        ...state,
        activeButton: action.payload,
      };
    },
  },
});

export default toolBoxSlice;
