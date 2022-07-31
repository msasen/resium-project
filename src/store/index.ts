import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { configureStore } from "@reduxjs/toolkit";

import menuSlice from "@/container/Menu/store/menuSlice";
import toolBoxSlice from "@/container/Toolbox/store/toolBoxSlice";
import DrawSlice from "@/modules/Globe/Draw/store/DrawSlice";
import goOnGlobeSlice from "@/modules/Globe/goOnGlobe/store/goOnGlobeSlice";
import layerSlice from "@/modules/Menu/Slider/store/layerSlice";
import drawingToolsSlice from "@/modules/Toolbox/DrawingTools/store/drawingToolsSlice";
import takeBackDrawingSlice from "@/modules/Toolbox/DrawingTools/TakeBackDrawing/store/takeBackDrawingSlice";
import styleToolsSlice from "@/modules/Toolbox/StyleTools/store/drawingToolsSlice";

import positionSlice from "./slice/positionData";

const store = configureStore({
  reducer: {
    goOnGlobe: goOnGlobeSlice.reducer,
    menu: menuSlice.reducer,
    layer: layerSlice.reducer,
    position: positionSlice.reducer,
    drawSlice: DrawSlice.reducer,
    toolBox: toolBoxSlice.reducer,
    drawingTools: drawingToolsSlice.reducer,
    styleTools: styleToolsSlice.reducer,
    takeBackDrawing: takeBackDrawingSlice.reducer,
  },
});

export default store;
