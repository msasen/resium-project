import { ArcGisMapServerImageryProvider } from "cesium";
import { ImageryLayer } from "resium";

import { IFrame } from "@/interfaces/Opacity";
// TODO 1
/**
 * url'i dokümandaki gibi memolize et
 */
const AddImageryProvider = (props: IFrame) => {
  const { frame, url } = props;
  const { opacity, visibility } = frame;
  return (
    <div>
      {visibility ? (
        <ImageryLayer
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

export default AddImageryProvider;
