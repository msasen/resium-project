import { Fragment } from "react";

import LineIcons from "@/components/Common/Icons/LineIcons";
import { ActiveButton } from "@/container/Toolbox/store/state";
import { useDispatch, useSelector } from "@/hooks/storeHook";
import DrawSlice from "@/modules/Globe/Draw/store/DrawSlice";
import drawingToolsSlice from "@/modules/Toolbox/DrawingTools/store/drawingToolsSlice";

export type IColorMenuButton = { fill: string; color: string };

const ColorMenuButton = (_props: IColorMenuButton) => {
  const { fill, color } = _props;
  const { activeColorButton } = useSelector(state => state.drawingTools);
  const { activeButton } = useSelector(store => store.toolBox);

  const dispatch = useDispatch();
  const { updateColor } = DrawSlice.actions;
  const { UpdateActiveColorButton } = drawingToolsSlice.actions;
  const change = () => {
    activeButton === ActiveButton.ANY ? null : dispatch(updateColor(color));
  };
  return (
    <Fragment>
      {activeColorButton === color ? (
        <button
          style={{ background: "#1890ff" }}
          onClick={() => {
            dispatch(UpdateActiveColorButton(color));
            change();
          }}>
          <LineIcons fill={fill} />
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch(UpdateActiveColorButton(color));
            change();
          }}>
          <LineIcons fill={fill} />
        </button>
      )}
    </Fragment>
  );
};

export default ColorMenuButton;
