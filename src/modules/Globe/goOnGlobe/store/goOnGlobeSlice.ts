import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IThreeDimensionalCoordinate } from "@/interfaces/common/index";

const initialState: IThreeDimensionalCoordinate = {
  twoDimensionalCoordinates: [0.698874, -1.31968],
  alt: 100000,
};
const goOnGlobeSlice = createSlice({
  name: "goOnGlobe",
  initialState,
  reducers: {
    updateCoordinateToGo: (s, action: PayloadAction<IThreeDimensionalCoordinate>) => {
      return {
        ...s,
        twoDimensionalCoordinates: action.payload.twoDimensionalCoordinates,
        alt: action.payload.alt,
      };
    },
  },
});

export default goOnGlobeSlice;
