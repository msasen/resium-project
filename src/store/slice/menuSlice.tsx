import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { DropdownItems } from "@/helpers/convertCordinateListToDropdownItem";
import { IDropdownItems } from "@/interfaces/Iui";

const initialState = DropdownItems;

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    update: (state, action: PayloadAction<IDropdownItems>) => {
      return {
        ...state,
        GoToItem: [...state, action.payload],
      };
    },
  },
});

export default menuSlice;
