import { useState } from "react";

import LineIcons from "@/components/Common/Icons/LineIcons";
import LineType from "@/components/Common/Icons/LineType";
import ColorMenuButton from "@/components/Toolbox/Button/ColorMenuButton/Index";
import { useDispatch, useSelector } from "@/hooks/storeHook";
import DrawSlice from "@/modules/Globe/Draw/store/DrawSlice";

import { ActiveButton } from "./store/state";

type Props = {};

const DrawingTools = (_props: Props) => {
  const [isColorMenuOpen, setIsColorMenuOpen] = useState(false);
  const [isLineMenuOpen, setIsLineMenuOpen] = useState(false);
  const { activeButton } = useSelector(store => store.toolBox);

  const dispatch = useDispatch();
  const { updateStroke } = DrawSlice.actions;
  const change = (e: any) => {
    activeButton === ActiveButton.ANY ? null : dispatch(updateStroke(Number(e.target.value)));
  };
  return (
    <div id="DrawingTools" className="block">
      {isColorMenuOpen ? (
        <button
          style={{ background: "#1890ff" }}
          onClick={() => {
            setIsColorMenuOpen(false);
            setIsLineMenuOpen(false);
          }}>
          <LineIcons fill="#ef821e" />
        </button>
      ) : (
        <button
          onClick={() => {
            setIsColorMenuOpen(true);
            setIsLineMenuOpen(false);
          }}>
          <LineIcons fill="#ef821e" />
        </button>
      )}
      {isColorMenuOpen ? (
        <div id="colorMenu">
          <ColorMenuButton fill="#ffff00" color="YELLOW" />
          <ColorMenuButton fill="#006400" color="DARKGREEN" />
          <ColorMenuButton fill="#000000" color="BLACK" />
          <ColorMenuButton fill="#0000ff" color="BLUE" />
          <ColorMenuButton fill="#a52a2a" color="BROWN" />
          <ColorMenuButton fill="##00ffff" color="CYAN" />
          <ColorMenuButton fill="##ff00ff" color="MAGENTA" />
          <ColorMenuButton fill="#ff0000" color="RED" />
        </div>
      ) : null}
      {isLineMenuOpen ? (
        <button
          style={{ background: "#1890ff" }}
          onClick={() => {
            setIsColorMenuOpen(false);
            setIsLineMenuOpen(false);
          }}>
          <LineType />
        </button>
      ) : (
        <button
          onClick={() => {
            setIsColorMenuOpen(false);
            setIsLineMenuOpen(true);
          }}>
          <LineType />
        </button>
      )}
      {isLineMenuOpen ? (
        <div id="lineMenu">
          <div className="bg-red"></div>
          <input
            id="slider"
            type="range"
            min="0"
            max="11"
            defaultValue="11"
            onChange={e => {
              change(e);
            }}
          />
        </div>
      ) : null}
    </div>
  );
};

export default DrawingTools;
