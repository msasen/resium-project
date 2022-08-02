type LatLng = {
  latitude: number;
  longitude: number;
};

function calculateMidPoint(
  latLngA: LatLng,
  latLngB: LatLng,
): {
  lng: number;
  lat: number;
} {
  function toRadians(degress: number): number {
    return degress * (Math.PI / 180);
  }

  function toDegrees(radians: number): string {
    return (radians * (180 / Math.PI)).toFixed(4);
  }

  const lngDiff = toRadians(latLngB.longitude - latLngA.longitude);
  const latA = toRadians(latLngA.latitude);
  const latB = toRadians(latLngB.latitude);
  const lngA = toRadians(latLngA.longitude);

  const bx = Math.cos(latB) * Math.cos(lngDiff);
  const by = Math.cos(latB) * Math.sin(lngDiff);

  const latMidway = parseFloat(
    toDegrees(
      Math.atan2(
        Math.sin(latA) + Math.sin(latB),
        Math.sqrt((Math.cos(latA) + bx) * (Math.cos(latA) + bx) + by * by),
      ),
    ),
  );
  const lngMidway = parseFloat(toDegrees(lngA + Math.atan2(by, Math.cos(latA) + bx)));

  return {
    lng: lngMidway,
    lat: latMidway,
  };
}

export default calculateMidPoint;
