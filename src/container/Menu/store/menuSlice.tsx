import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IDropdownItems } from "@/interfaces/menu/Index";

import { state } from "./state";

const initialState = state;
const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    addCoordinatesToTheMenu: (state, action: PayloadAction<IDropdownItems>) => {
      return {
        ...state,
        GoToItem: [...state, action.payload],
      };
    },
  },
});

export default menuSlice;
