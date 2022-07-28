import { Color } from "cesium";
import { GeoJsonDataSource } from "resium";

type Props = { data: any; color: Color };

const Draw = (_props: Props) => {
  const { data, color } = _props;
  return <GeoJsonDataSource data={data} markerColor={color} />;
};

export default Draw;
