import {
  Color,
  DistanceDisplayCondition,
  Cartesian3,
  Cartesian2,
  HorizontalOrigin,
  VerticalOrigin,
  NearFarScalar,
  HeightReference,
} from "cesium";
import { Label } from "resium";

type Props = { text: string; distance: number };

const Labels = (props: Props) => {
  const { distance, text } = props;
  return (
    <Label
      fillColor={Color.RED}
      text={text}
      scale={1.2}
      font={"Arial"}
      showBackground={true}
      eyeOffset={new Cartesian3(0.0, 0.0, -10.0)}
      horizontalOrigin={HorizontalOrigin.CENTER}
      pixelOffset={new Cartesian2(0.0, -20.0)}
      pixelOffsetScaleByDistance={new NearFarScalar(1.5e2, 3.0, 1.5e7, 0.5)}
      disableDepthTestDistance={1.2742018 * 10 ** 7}
    />
  );
};

export default Labels;
