import { useEffect } from "react";

import LineIcons from "@/components/Common/Icons/LineIcons";
import { ActiveButton } from "@/container/Toolbox/store/state";
import toolBoxSlice from "@/container/Toolbox/store/toolBoxSlice";
import { useDispatch, useSelector } from "@/hooks/storeHook";
import DrawSlice from "@/modules/Globe/Draw/store/DrawSlice";
import { ICoordinates, IFeature } from "@/modules/Globe/Draw/store/type";
import DrawingTools from "@/modules/Toolbox/DrawingTools/Index";
import React from "react";

type Props = {};
const Feature: IFeature = {
  type: "Feature",
  properties: {},
  geometry: {
    type: "LineString",
    coordinates: [],
  },
  style: {
    __comment: "all SVG styles allowed",
    fill: "red",
    "stroke-width": "3",
    "fill-opacity": 0.6,
  },
};

const Line = (_props: Props) => {
  const { lat, long } = useSelector(store => store.position);
  const { activeButton } = useSelector(store => store.toolBox);

  const dispatch = useDispatch();
  const { addPoitIOnLastLine } = DrawSlice.actions;
  const { addShape } = DrawSlice.actions;
  const { update } = toolBoxSlice.actions;
  const InitilizeFeature = () => {
    dispatch(addShape(Feature));
  };
  useEffect(() => {
    if (activeButton === ActiveButton.LINE) {
      const coordinate: ICoordinates = [long, lat];
      dispatch(addPoitIOnLastLine(coordinate));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat, long]);
  ActiveButton;
  return activeButton === ActiveButton.LINE ? (
    <div>
      <button
        className="block"
        style={{ background: "#1890ff", width: "57px", borderRadius: "5px" }}
        onClick={() => {
          dispatch(update(ActiveButton.ANY));
        }}>
        Kaydet
      </button>
      <DrawingTools />
    </div>
  ) : (
    <button
      className="flex"
      onClick={() => {
        InitilizeFeature();
        dispatch(update(ActiveButton.LINE));
      }}>
      <LineIcons fill="" />
    </button>
  );
};

export default Line;
