import { useDispatch } from "@/hooks/storeHook";
import DrawSlice from "@/modules/Globe/Draw/store/DrawSlice";

import { IFeature } from "../modules/Globe/Draw/store/type";

type Props = {};

const Test = (_props: Props) => {
  const dispatch = useDispatch();
  const { addShape } = DrawSlice.actions;
  const Feature: IFeature = {
    type: "Feature",
    properties: {},
    geometry: {
      type: "LineString",
      coordinates: [
        [-159.2578125, 65.80277639340238],
        [86.8359375, 29.53522956294847],
      ],
    },
  };
  return (
    <div style={{ position: "absolute", background: "red", top: "0px", left: "40px" }}>
      <button
        onClick={() => {
          dispatch(addShape(Feature));
        }}>
        deneme
      </button>
    </div>
  );
};

export default Test;
