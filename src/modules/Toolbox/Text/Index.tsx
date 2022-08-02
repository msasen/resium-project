import { useEffect, useState } from "react";

import Coordinate from "@/components/Common/Icons/Coordinate";
import Alert from "@/components/Toolbox/Popup/Index";
import { ActiveButton } from "@/container/Toolbox/store/state";
import toolBoxSlice from "@/container/Toolbox/store/toolBoxSlice";
import { useDispatch, useSelector } from "@/hooks/storeHook";

type Props = {};

const Line = (_props: Props) => {
  const { lat, long } = useSelector(store => store.position);
  const { activeButton } = useSelector(store => store.toolBox);
  const [alert, setAlert] = useState(0);
  const { update } = toolBoxSlice.actions;
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (activeButton === ActiveButton.TEXT) {
      setAlert(alert + 1);
    } else {
      setAlert(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat, long]);
  return activeButton === ActiveButton.TEXT ? (
    <div>
      <button
        className="block"
        style={{ background: "#1890ff" }}
        onClick={() => {
          dispatch(update(ActiveButton.ANY));
        }}>
        <Coordinate />
      </button>
      {alert != 0 ? (
        <Alert
          message="kordinant bilgileri"
          description={`lat:${lat}, lon:${long}`}
          showIcon
          type="info"
        />
      ) : (
        <Alert
          message="kordinant bilgileri"
          description={`Lütfen bir kordinant seçin`}
          showIcon
          type="warning"
        />
      )}
    </div>
  ) : (
    <button
      className="flex"
      onClick={() => {
        dispatch(update(ActiveButton.TEXT));
      }}>
      <Coordinate />
    </button>
  );
};

export default Line;
