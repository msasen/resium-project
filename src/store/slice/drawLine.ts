import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IDrawLine, red } from "@/interfaces/Toolbox/Toolbox";

const initialState: IDrawLine = {
  firstCordinate: {
    lat: 0,
    lon: 0,
  },
  secondCordinate: {
    lat: 0,
    lon: 0,
  },
};

const lineDrawSlice = createSlice({
  name: "linedraw",
  initialState,
  reducers: {
    firstupdate: (s, action: PayloadAction<red>) => {
      return {
        ...s,
        firstCordinate: action.payload,
      };
    },
    secondupdate: (s, action: PayloadAction<red>) => {
      return {
        ...s,
        secondCordinate: action.payload,
      };
    },
  },
});

export default lineDrawSlice;
