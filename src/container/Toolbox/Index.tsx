/*
Projede sass kullanılıyorsa ./style.sass 
Projede css kullanılıyorsa  ./style.css
*/
import "./style.css";

/*
!Svg component'i yerine svg ikonu kullanılmak istenirse
<img src="/path/to/image.svg" alt="SVG as an image">
*/

import Line from "@/modules/Toolbox/Line/Index";
import Polygon from "@/modules/Toolbox/Polygon/Indx";
import Text from "@/modules/Toolbox/Text/Index";

function Toolbox() {
  return (
    <div id="container">
      <Line />
      <Polygon />
      <Text />
    </div>
  );
}

export default Toolbox;
