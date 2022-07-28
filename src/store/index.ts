import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { configureStore } from "@reduxjs/toolkit";

import DrawSlice from "@/modules/Globe/Draw/store/DrawSlice";
import mapSlice from "@/store/slice/mapSlice";

import lineDrawSlice from "./slice/drawLine";
import menuSlice from "./slice/menuSlice";
import opacitySlice from "./slice/opacitySlice";
import positionSlice from "./slice/positionData";

const store = configureStore({
  reducer: {
    map: mapSlice.reducer,
    menu: menuSlice.reducer,
    opacity: opacitySlice.reducer,
    position: positionSlice.reducer,
    drawLinw: lineDrawSlice.reducer,
    drawSlice: DrawSlice.reducer,
  },
});

export default store;
