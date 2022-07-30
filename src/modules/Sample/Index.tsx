import { useSelector } from "@/hooks/storeHook";

type Props = {};

const DrawingTools = (_props: Props) => {
  const { activeButton } = useSelector(store => store.drawingTools);
  return (
    <div>
      {activeButton.map((button, key) => (
        <div key={key}>{button}</div>
      ))}
    </div>
  );
};

export default DrawingTools;
