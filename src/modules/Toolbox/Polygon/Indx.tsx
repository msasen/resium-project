import { Color } from "cesium";
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

  color: Color.YELLOW,
};

const Polygon = (_props: Props) => {
  const { lat, long } = useSelector(store => store.position);
  const { activeButton } = useSelector(store => store.toolBox);

  const dispatch = useDispatch();
  const { addPoitIOnLastPolygon } = DrawSlice.actions;
  const { addShape } = DrawSlice.actions;
  const { update } = toolBoxSlice.actions;
  const InitilizeFeature = () => {
    dispatch(addShape(Feature));
  };
  useEffect(() => {
    if (activeButton === ActiveButton.POLYGON) {
      const coordinate: ICoordinates = [long, lat];
      dispatch(addPoitIOnLastPolygon(coordinate));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat, long]);
  return activeButton === ActiveButton.POLYGON ? (
    <div>
      <button
        className="flex"
        style={{ background: "#1890ff", width: "50px", borderRadius: "5px" }}
        onClick={() => {
          dispatch(update(ActiveButton.ANY));
        }}>
        Kaydet
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
