export interface ILayer {
  visibility: boolean;
  opacity: number;
}

export interface ILayers {
  NatGeo_World_Map: ILayer;
  world_Imagery: ILayer;
  world_Physical_Map: ILayer;
  world_Shaded_Relief: ILayer;
  world_Street_Map: ILayer;
  world_Terrain_Base: ILayer;
  world_Topo_Map: ILayer;
}

export interface IFrame {
  frame: ILayer;
  url: string;
}
