import { useState, useEffect } from "react";

import Polyline from "@/components/Common/Icons/Polyline";
import { useDispatch, useSelector } from "@/hooks/storeHook";
import DrawSlice from "@/modules/Globe/Draw/store/DrawSlice";
import { ICoordinates } from "@/modules/Globe/Draw/store/type";

import { IFeature } from "../../Globe/Draw/store/type";

type Props = {};

const Polygon = (_props: Props) => {
  const { lat, long } = useSelector(store => store.position);
  const { addPoitIOnLastPolygon } = DrawSlice.actions;
  const dispatch = useDispatch();
  const [isActive, setisActive] = useState(false);
  const { addShape } = DrawSlice.actions;

  const Feature: IFeature = {
    type: "Feature",
    properties: {},
    geometry: {
      type: "LineString",
      coordinates: [[0, 2]],
    },
  };
  const InitilizeFeature = () => {
    dispatch(addShape(Feature));
  };
  useEffect(() => {
    if (isActive) {
      const coordinate: ICoordinates = [long, lat];
      dispatch(addPoitIOnLastPolygon(coordinate));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat, long]);
  return isActive ? (
    <div>
      <button
        style={{ background: "#1890ff", width: "50px", borderRadius: "5px" }}
        onClick={() => {
          setisActive(!isActive);
        }}>
        Kaydet
      </button>
    </div>
  ) : (
    <button
      onClick={() => {
        InitilizeFeature();
        setisActive(!isActive);
      }}>
      <Polyline />
    </button>
  );
};

export default Polygon;
