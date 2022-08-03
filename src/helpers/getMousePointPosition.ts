import {
  Camera,
  Cartesian2,
  defined,
  Ellipsoid,
  Globe,
  Cartesian3,
  Math as CesiumMath,
} from "cesium";

/**
 * 2D Kartezyen noktasının boylam, enlem, kamera yüksekliği ve rakımını alın
 *
 * @param {*} camera
 * @param {*} globe
 * @param {*} Cartesian2
 * @param {*} [ellipsoid=Ellipsoid.WGS84]
 * @returns
 */

const getMousePointPosition = (
  camera: Camera,
  globe: Globe,
  Cartesian2: Cartesian2,
  ellipsoid: Ellipsoid = Ellipsoid.WGS84,
) => {
  const cartesian = camera.pickEllipsoid(Cartesian2) as Cartesian3;
  if (!defined(cartesian)) return;
  const cartographic = ellipsoid.cartesianToCartographic(cartesian);
  const longitude = Number(CesiumMath.toDegrees(cartographic.longitude).toFixed(6));
  const latitude = Number(CesiumMath.toDegrees(cartographic.latitude).toFixed(6));
  const elevation = Math.ceil(globe.getHeight(cartographic) as number);
  console.log(elevation);
  const height = Math.ceil(camera.positionCartographic.height) - elevation;
  return {
    long: longitude,
    lat: latitude,
    height: height,
    elevation: elevation,
  };
};

export { getMousePointPosition };
