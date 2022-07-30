import { useSelector } from "@/hooks/storeHook";

type Props = {};

const StyleTools = (_props: Props) => {
  const { activeButton } = useSelector(store => store.styleTools);
  return (
    <div>
      {activeButton.map((button, key) => (
        <div key={key}>{button}</div>
      ))}
    </div>
  );
};

export default StyleTools;
