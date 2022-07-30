import { useState } from "react";

import Style from "@/components/Common/Icons/Style";
import DrawingTools from "@/modules/Toolbox/DrawingTools/Index";

type Props = {};

const StyleTools = (_props: Props) => {
  const [isActive, setIsActive] = useState(false);
  return isActive ? (
    <div>
      <button
        className="inline"
        style={{ background: "#1890ff" }}
        onClick={() => {
          setIsActive(!isActive);
        }}>
        <Style />
      </button>
      <DrawingTools />
    </div>
  ) : (
    <button
      className="flex"
      onClick={() => {
        setIsActive(!isActive);
      }}>
      <Style />
    </button>
  );
};

export default StyleTools;
