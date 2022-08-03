 # ofline terrain oluşturmada çalışan çözüm
## dataset indirme

data: srtmdem 90m resolution elevation data
indirme kyanağı:https://portal.opentopography.org/raster?opentopoID=OTSRTM.042013.4326.1
Ayrıntılı anlatım https://www.youtube.com/watch?v=Ue0s-OhQmuk

# GDAL ile birleştirme
https://gdal.org/programs/gdalbuildvrt.html

# Cesium Terrain Builder Docker ile cesium için uygun terrain oluşturma
https://github.com/tum-gis/cesium-terrain-builder-docker

# server
https://github.com/geo-data/cesium-terrain-server

# Resium ile kullanım 
        new CesiumTerrainProvider({
          url: new Resource({
            url: "http://localhost:8000/terrain",
          }),
        })
      }


> İşin ilerleyişini buradaki konudan takip ettim. Burada kullanılan yazılımlar güven vermesede adımlar konusunda çok fikir verdi.
> Misal burada bahsedilen dataseti güvenli bir kaynaktan indirdim. Burada bahsedilen tif birleştirmeyi gdal gibi open-source bir yazılımla gerçekleştirdim. ve son olarak build işlemini open source cesium terrain builder ile gerçekleştirdim. 


# Tüm adımların gerçekleştiği bir örnek
https://drive.google.com/file/d/1PRJlsG62m4ULmVgcWX7zlDZotLVx6byP/view 
