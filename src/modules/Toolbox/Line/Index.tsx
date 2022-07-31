import { useEffect } from "react";

import LineIcons from "@/components/Common/Icons/LineIcons";
import { ActiveButton } from "@/container/Toolbox/store/state";
import toolBoxSlice from "@/container/Toolbox/store/toolBoxSlice";
import { useDispatch, useSelector } from "@/hooks/storeHook";
import DrawSlice from "@/modules/Globe/Draw/store/DrawSlice";
import { ICoordinates, IDrawWithColor } from "@/modules/Globe/Draw/store/state";

type Props = {};
const Feature: IDrawWithColor = {
  data: {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: [],
        },
      },
    ],
  },
  color: { red: 1, green: 1, blue: 0, alpha: 1 },
  stroke: 10,
};

const Line = (_props: Props) => {
  const { lat, long } = useSelector(store => store.position);
  const { activeButton } = useSelector(store => store.toolBox);
  const { activeColorButton } = useSelector(state => state.drawingTools);
  const dispatch = useDispatch();
  const { addPoitIOnLastLine, updateColor } = DrawSlice.actions;
  const { addShape } = DrawSlice.actions;
  const { update } = toolBoxSlice.actions;
  const InitilizeFeature = () => {
    dispatch(addShape(Feature));
  };
  useEffect(() => {
    if (activeButton === ActiveButton.LINE) {
      const coordinate: ICoordinates = [long, lat];
      dispatch(updateColor(activeColorButton));
      dispatch(addPoitIOnLastLine(coordinate));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat, long]);
  ActiveButton;
  return activeButton === ActiveButton.LINE ? (
    <div>
      <button
        className="block"
        style={{ background: "#1890ff" }}
        onClick={() => {
          dispatch(update(ActiveButton.ANY));
        }}>
        <LineIcons fill="" />
      </button>
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
