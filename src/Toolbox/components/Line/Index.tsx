import { Cartesian3, Color, PolylineDashMaterialProperty } from "cesium";
import { Entity, PolylineGraphics } from "resium";

import { useCounterSelector } from "@/hooks/storeHook";

const Line = () => {
  const drawline = useCounterSelector(state => state.drawLinw);
  const { firstCordinate, secondCordinate } = drawline;
  console.log(firstCordinate);

  return (
    <Entity
      name="PolylineGraphics"
      description="PolylineGraphics!!"
      position={Cartesian3.fromDegrees(firstCordinate.lat, firstCordinate.lon, 1)}>
      <PolylineGraphics
        positions={Cartesian3.fromDegreesArrayHeights([
          firstCordinate.lon,
          firstCordinate.lat,
          1,
          secondCordinate.lon,
          secondCordinate.lat,
          1,
        ])}
        width={4}
        material={
          new PolylineDashMaterialProperty({
            color: Color.CYAN,
          })
        }
      />
    </Entity>
  );
};

export default Line;
