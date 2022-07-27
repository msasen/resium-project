/*
Projede sass kullanılıyorsa ./style.sass 
Projede css kullanılıyorsa  ./style.css
*/
import "./style.css";

/*
!Svg component'i yerine svg ikonu kullanılmak istenirse
<img src="/path/to/image.svg" alt="SVG as an image">
*/
import { useState } from "react";

import { useCounterDispatch, useCounterSelector } from "@/hooks/storeHook";
import lineDrawSlice from "@/store/slice/drawLine";
import Circle from "@/Toolbox/components/icons/Circle";
import LineIcons from "@/Toolbox/components/icons/LineIcons";
import Polyline from "@/Toolbox/components/icons/Polyline";
import Text from "@/Toolbox/components/Text/Index";
import { useKeyPress } from "@/Toolbox/hooks/useKeyPress";
import { IFirst } from "@/Toolbox/interface";

function Toolbox() {
  const position = useCounterSelector(state => state.position);
  const { height, lat, long } = position;

  const [line, setLine] = useState(false);
  const firstPointSave: boolean = useKeyPress("1");
  const secondPointSave: boolean = useKeyPress("2");
  const dispatch = useCounterDispatch();

  const { firstupdate, secondupdate } = lineDrawSlice.actions;
  if (line === true) {
    if (firstPointSave === true) {
      const data: IFirst = { lat: lat, lon: long };
      console.log(data);
      dispatch(firstupdate(data));
    }
    if (secondPointSave === true) {
      const data: IFirst = { lat: lat, lon: long };
      console.log(data);
      dispatch(secondupdate(data));
    }
  }

  return (
    <div id="container">
      <button>
        <Polyline />
      </button>
      <button
        onClick={() => {
          setLine(!line);
        }}>
        <LineIcons />
      </button>
      <button>
        <Circle />
      </button>
      <LineIcons />
      yükseklik:{height} lat:{lat} lon:{long}
      <Text />
    </div>
  );
}

export default Toolbox;
