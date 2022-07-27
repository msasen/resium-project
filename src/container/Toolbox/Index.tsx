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

import Circle from "@/components/Common/Icons/Circle";
import LineIcons from "@/components/Common/Icons/LineIcons";
import Polyline from "@/components/Common/Icons/Polyline";
import { useDispatch, useSelector } from "@/hooks/storeHook";
import { useKeyPress } from "@/hooks/useKeyPress";
import { IFirst } from "@/interfaces/Toolbox";
import Text from "@/modules/Globe/Draw/Text/Index";
import lineDrawSlice from "@/store/slice/drawLine";

function Toolbox() {
  const position = useSelector(state => state.position);
  const { height, lat, long } = position;

  const [line, setLine] = useState(false);
  const firstPointSave: boolean = useKeyPress("1");
  const secondPointSave: boolean = useKeyPress("2");
  const dispatch = useDispatch();

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
