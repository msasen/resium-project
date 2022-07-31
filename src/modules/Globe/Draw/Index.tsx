import { Color } from "cesium";
import { Fragment, memo } from "react";
import { GeoJsonDataSource } from "resium";

import { useSelector } from "@/hooks/storeHook";

import { IDrawing } from "./store/state";

const Draw = () => {
  const { drawings } = useSelector(store => store.drawSlice);

  return (
    <Fragment>
      {drawings.map((drawing, i) => (
        <Fragment key={i}>
          <ListItem drawing={drawing.data} color={drawing.color} stroke={drawing.stroke} />
        </Fragment>
      ))}
    </Fragment>
  );
};

type IProps = { drawing: IDrawing; color: Color; stroke: number };
const ListItem = memo(function ListItem(porps: IProps) {
  const { drawing, color, stroke } = porps;
  return <GeoJsonDataSource data={drawing} strokeWidth={stroke} stroke={color} />;
});

export default Draw;
