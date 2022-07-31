/*
Projede sass kullanılıyorsa ./style.sass 
Projede css kullanılıyorsa  ./style.css
*/
import "./style.css";

/*
!Svg component'i yerine svg ikonu kullanılmak istenirse
<img src="/path/to/image.svg" alt="SVG as an image">
*/

import TakeBackDrawing from "@/modules/Toolbox/DrawingTools/TakeBackDrawing/Index";
import Line from "@/modules/Toolbox/Line/Index";
import Polygon from "@/modules/Toolbox/Polygon/Indx";
import StyleTools from "@/modules/Toolbox/StyleTools/Index";
import TakeBackCordinate from "@/modules/Toolbox/TakeBackCordinate/Index";
import Text from "@/modules/Toolbox/Text/Index";

function Toolbox() {
  return (
    <div id="container">
      <StyleTools />
      <Line />
      <Polygon />
      <Text />
      <div id="take-back-menu">
        <TakeBackDrawing />
        <TakeBackCordinate />
      </div>
    </div>
  );
}

export default Toolbox;
