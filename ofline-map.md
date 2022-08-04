data: https://data.maptiler.com/downloads/tileset/satellite/
mbtiles-server: https://www.google.com/search?q=mbtiles+server&rlz=1C1GCEU_trTR1017TR1017&sxsrf=ALiCzsYNrFVYSMwTa0imUiv20T7KI420dg%3A1659616455318&ei=x7zrYrjyErS9xc8P4ZO6qAw&oq=mbtiles+&gs_lcp=Cgdnd3Mtd2l6EAEYATIGCCMQJxATMgYIIxAnEBMyBggjECcQEzIFCAAQgAQyBQgAEIAEMgQIABAeMgQIABAeMgQIABAeMgQIABAeMgQIABAeOgcIIxCwAxAnOgcIABBHELADSgQIQRgASgQIRhgAUI4FWI4FYP4LaAFwAXgAgAGaAYgBmgGSAQMwLjGYAQCgAQHIAQrAAQE&sclient=gws-wiz

cesium:
var viewer = new Cesium.Viewer('cesiumContainer', {
    imageryProvider : new Cesium.TileMapServiceImageryProvider({
        url : ""
    }),
    baseLayerPicker : false,
    geocoder : false
});
resium:
const imageryProvider = new Cesium.TileMapServiceImageryProvider({
        url : Cesium.buildModuleUrl('Assets/Textures/NaturalEarthII')
});
<Viewer full 
  timeline={false} 
  imageryProvider={imageryProvider} 
  animation={false} 
  ref={ref}

baseLayerPicker : false,
geocoder : false
>
.
.
.
<Viewer />
