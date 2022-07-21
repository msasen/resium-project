import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (s, action: PayloadAction<number>) => {
      return {
        ...s,
        value: s.value + action.payload,
      };
    },
  },
});

export default counterSlice;

// const { increment } = counterSlice.actions;
