import { useEffect, useState } from "react";

import LineIcons from "@/components/Common/Icons/LineIcons";
import Alert from "@/components/Toolbox/Popup/Index";
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
  const [clickCounter, SetClickCounter] = useState(0);
  const { lat, long, height } = useSelector(store => store.position);
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
      if (activeButton === ActiveButton.LINE) {
        SetClickCounter(clickCounter + 1);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat, long, height]);
  useEffect(() => {
    activeButton != ActiveButton.LINE ? SetClickCounter(0) : null;
  }, [activeButton]);

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
      {clickCounter === 0 ? (
        <Alert
          message="Bilgilendirme"
          description={`lütfen ilk noktayı seçiniz`}
          showIcon
          type="warning"
        />
      ) : (
        <Alert
          message="Bilgilendirme"
          description={`lütfen ${clickCounter} noktayı seçiniz`}
          showIcon
          type="info"
        />
      )}
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
