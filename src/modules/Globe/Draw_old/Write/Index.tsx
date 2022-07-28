import { Cartesian3, Color, LabelStyle } from "cesium";
import React from "react";
import { Entity, LabelGraphics } from "resium";

const Line = () => {
  return (
    <Entity
      name="LabelGraphics"
      description="LabelGraphics!!"
      position={Cartesian3.fromDegrees(-34.0707383, 5.7117244, 100)}>
      <LabelGraphics
        text="LabelGraphics"
        font="24px Helvetica"
        fillColor={Color.SKYBLUE}
        outlineColor={Color.BLACK}
        outlineWidth={2}
        style={LabelStyle.FILL_AND_OUTLINE}
      />
    </Entity>
  );
};

export default Line;
