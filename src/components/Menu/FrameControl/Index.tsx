import { Checkbox } from "antd";
import { useState } from "react";

import Slider from "@/modules/Menu/Slider/Index";

type ICheckBoxMenu = {
  Content: string;
  id: string;
  defaultChecked: boolean;
};

const FrameControl = (props: ICheckBoxMenu) => {
  const [checked, setChecked] = useState(false);
  const { Content, id, defaultChecked } = props;
  const onChange = (e: any) => {
    setChecked(e.target.checked);
  };

  return (
    <div
      style={{
        display: "block",
        width: "0px",
        height: "60px",
        marginLeft: "20px",
        marginTop: "10px",
      }}>
      <Checkbox checked={checked} defaultChecked={defaultChecked} onChange={onChange}>
        {Content}
      </Checkbox>
      <div style={{ position: "absolute", width: "120px", marginTop: "5px" }}>
        <Slider disabled={!checked} id={id} />
      </div>
      )
    </div>
  );
};
export default FrameControl;
