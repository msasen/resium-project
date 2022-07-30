import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  IgetMousePointPosition,
  IgetMousePointPositionReducers,
} from "@/interfaces/Toolbox/Toolbox";

const initialState: IgetMousePointPosition = {
  long: 0,
  lat: 0,
  height: 100,
  elevation: 0,
};

const positionSlice = createSlice({
  name: "position",
  initialState,
  reducers: {
    update: (s, action: PayloadAction<IgetMousePointPositionReducers>) => {
      return {
        ...s,
        long: action.payload.long,
        lat: action.payload.lat,
        height: action.payload.height,
      };
    },
  },
});

export default positionSlice;
