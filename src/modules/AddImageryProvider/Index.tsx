import AddImageryProvider from "@/components/AddImageryProvider/Index";
import { Arcgis } from "@/enum";
import { useCounterSelector } from "@/hooks/storeHook";

const AddImageryProviderModule = () => {
  const imageryLayer = useCounterSelector(state => state.opacity);
  const {
    NatGeo_World_Map,
    world_Imagery,
    world_Physical_Map,
    world_Shaded_Relief,
    world_Street_Map,
    world_Terrain_Base,
    world_Topo_Map,
  } = imageryLayer;
  return (
    <div>
      <AddImageryProvider frame={NatGeo_World_Map} url={Arcgis.NatGeo_World_Map} />
      <AddImageryProvider frame={world_Physical_Map} url={Arcgis.World_Physical_Map} />
      <AddImageryProvider frame={world_Imagery} url={Arcgis.World_Imagery} />
      <AddImageryProvider frame={world_Shaded_Relief} url={Arcgis.World_Shaded_Relief} />
      <AddImageryProvider frame={world_Street_Map} url={Arcgis.World_Street_Map} />
      <AddImageryProvider frame={world_Terrain_Base} url={Arcgis.World_Terrain_Base} />
      <AddImageryProvider frame={world_Topo_Map} url={Arcgis.World_Topo_Map} />
    </div>
  );
};

export default AddImageryProviderModule;
