import { useEffect } from "react";

import Polyline from "@/components/Common/Icons/Polyline";
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
          coordinates: [[0, 0]],
        },
      },
    ],
  },
  color: { red: 1, green: 1, blue: 0, alpha: 1 },
  stroke: 11,
};

const Polygon = (_props: Props) => {
  const { lat, long } = useSelector(store => store.position);
  const { activeButton } = useSelector(store => store.toolBox);
  const { activeColorButton } = useSelector(state => state.drawingTools);

  const dispatch = useDispatch();
  const { addPoitIOnLastPolygon, updateColor } = DrawSlice.actions;
  const { addShape } = DrawSlice.actions;
  const { update } = toolBoxSlice.actions;
  const InitilizeFeature = () => {
    dispatch(addShape(Feature));
  };
  useEffect(() => {
    if (activeButton === ActiveButton.POLYGON) {
      const coordinate: ICoordinates = [long, lat];
      dispatch(updateColor(activeColorButton));
      dispatch(addPoitIOnLastPolygon(coordinate));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat, long]);
  return activeButton === ActiveButton.POLYGON ? (
    <div>
      <button
        className="flex"
        style={{ background: "#1890ff" }}
        onClick={() => {
          dispatch(update(ActiveButton.ANY));
        }}>
        <Polyline />
      </button>
    </div>
  ) : (
    <button
      className="flex"
      onClick={() => {
        InitilizeFeature();
        dispatch(update(ActiveButton.POLYGON));
      }}>
      <Polyline />
    </button>
  );
};

export default Polygon;
