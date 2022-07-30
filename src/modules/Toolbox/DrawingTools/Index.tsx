import { useState } from "react";

import LineIcons from "@/components/Common/Icons/LineIcons";
import LineType from "@/components/Common/Icons/LineType";

type Props = {};

const DrawingTools = (_props: Props) => {
  const [isColorMenuOpen, setIsColorMenuOpen] = useState(false);
  // onst { activeButton } = useSelector(store => store.drawingTools);
  return (
    <div id="DrawingTools" className="block">
      {isColorMenuOpen ? (
        <button
          style={{ background: "#1890ff" }}
          onClick={() => {
            setIsColorMenuOpen(!isColorMenuOpen);
          }}>
          <LineIcons fill="#ef821e" />
        </button>
      ) : (
        <button
          onClick={() => {
            setIsColorMenuOpen(!isColorMenuOpen);
          }}>
          <LineIcons fill="#ef821e" />
        </button>
      )}
      {isColorMenuOpen ? (
        <div id="colorMenu">
          <button>
            <LineIcons fill="#bfdde5" />
          </button>
          <button>
            <LineIcons fill="#ef821e" />
          </button>
          <button>
            <LineIcons fill="#a24c90" />
          </button>
          <button>
            <LineIcons fill="#f3d498" />
          </button>
          <button>
            <LineIcons fill="#c61575" />
          </button>
          <button>
            <LineIcons fill="#f2b9ac" />
          </button>
          <button>
            <LineIcons fill="#6c933d" />
          </button>
          <button>
            <LineIcons fill="#ff6d41" />
          </button>
        </div>
      ) : null}
      <button>
        <LineType />
      </button>
    </div>
  );
};

export default DrawingTools;
