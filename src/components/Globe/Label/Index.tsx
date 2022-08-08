import { Color, DistanceDisplayCondition } from "cesium";
import { Label } from "resium";

type Props = { text: string; distance: number };

const Labels = (props: Props) => {
  const { distance, text } = props;
  return (
    <Label
      fillColor={Color.RED}
      distanceDisplayCondition={new DistanceDisplayCondition(1, distance)}
      text={text}
      scale={1.2}
      font={"Arial"}
      horizontalOrigin={90}
    />
  );
};

export default Labels;
