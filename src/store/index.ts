import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { configureStore } from "@reduxjs/toolkit";

import toolBoxSlice from "@/container/Toolbox/store/toolBoxSlice";
import DrawSlice from "@/modules/Globe/Draw/store/DrawSlice";
import mapSlice from "@/modules/Globe/goOnGlobe/store/goOnGlobeSlice";
import drawingToolsSlice from "@/modules/Toolbox/DrawingTools/store/drawingToolsSlice";
import takeBackDrawingSlice from "@/modules/Toolbox/DrawingTools/TakeBackDrawing/store/takeBackDrawingSlice";
import styleToolsSlice from "@/modules/Toolbox/StyleTools/store/drawingToolsSlice";

import menuSlice from "./slice/menuSlice";
import opacitySlice from "./slice/opacitySlice";
import positionSlice from "./slice/positionData";

const store = configureStore({
  reducer: {
    map: mapSlice.reducer,
    menu: menuSlice.reducer,
    opacity: opacitySlice.reducer,
    position: positionSlice.reducer,
    drawSlice: DrawSlice.reducer,
    toolBox: toolBoxSlice.reducer,
    drawingTools: drawingToolsSlice.reducer,
    styleTools: styleToolsSlice.reducer,
    takeBackDrawing: takeBackDrawingSlice.reducer,
  },
});

export default store;
