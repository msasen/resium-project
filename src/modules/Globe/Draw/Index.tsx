import { Color } from "cesium";
import { Fragment, memo } from "react";
import { GeoJsonDataSource } from "resium";

import { useSelector } from "@/hooks/storeHook";

import { IDrawing } from "./store/state";

const Draw = () => {
  const data = useSelector(store => store.drawSlice);
  const { drawings } = data;

  return (
    <Fragment>
      {drawings.map((drawing, i) => {
        return (
          <Fragment key={i}>
            <ListItem drawing={drawing.data} color={drawing.color} stroke={drawing.stroke} />
          </Fragment>
        );
      })}
    </Fragment>
  );
};
type IProps = { drawing: IDrawing; color: Color; stroke: number };
const ListItem = memo(function ListItem(porps: IProps) {
  const { drawing, color, stroke } = porps;
  console.log(drawing);
  return <GeoJsonDataSource data={drawing} strokeWidth={stroke} stroke={color} />;
});

export default Draw;
