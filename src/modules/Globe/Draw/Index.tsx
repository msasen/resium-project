import { Color } from "cesium";

import DrawComponent from "@/components/Draw/Index";
import { useSelector } from "@/hooks/storeHook";

type Props = {};

const Draw = (_props: Props) => {
  const data = useSelector(store => store.drawSlice);
  return <DrawComponent color={Color.AQUA} data={data} />;
};

export default Draw;
