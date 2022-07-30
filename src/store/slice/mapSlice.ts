import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Icordinate } from "@/interfaces/globe/Iresium";

const initialState: Icordinate = {
  lon: 0.698874,
  lat: -1.31968,
  alt: 1000,
};

const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    update: (s, action: PayloadAction<Icordinate>) => {
      return {
        ...s,
        lat: action.payload.lat,
        lon: action.payload.lon,
        alt: action.payload.alt,
      };
    },
  },
});

export default mapSlice;
