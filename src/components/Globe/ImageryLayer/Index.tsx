import { ArcGisMapServerImageryProvider } from "cesium";
import { ImageryLayer as Layer } from "resium";

import { IFrame } from "@/interfaces/globe/Layer";
// TODO 1
/**
 * url'i dokümandaki gibi memolize et
 */
const ImageryLayer = (props: IFrame) => {
  const { frame, url } = props;
  const { opacity, visibility } = frame;
  return (
    <div>
      {visibility ? (
        <Layer
          imageryProvider={
            new ArcGisMapServerImageryProvider({
              url: url,
            })
          }
          alpha={opacity}
        />
      ) : null}
    </div>
  );
};

export default ImageryLayer;
