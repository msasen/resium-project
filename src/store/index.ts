import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { configureStore } from "@reduxjs/toolkit";

import mapSlice from "@/store/slice/mapSlice";

const store = configureStore({
  reducer: {
    map: mapSlice.reducer,
  },
});

export default store;
