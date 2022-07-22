import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { configureStore } from "@reduxjs/toolkit";

import mapSlice from "@/store/slice/mapSlice";

import menuSlice from "./slice/menuSlice";

const store = configureStore({
  reducer: {
    map: mapSlice.reducer,
    menu: menuSlice.reducer,
  },
});

export default store;
