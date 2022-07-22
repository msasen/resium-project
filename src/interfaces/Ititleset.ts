export interface Titleset {
  asset: Asset;
  extras: TitlesetExtras;
  properties: Properties;
  geometricError: number;
  root: Root;
}

export interface Asset {
  version: string;
  tilesetVersion: string;
}

export interface TitlesetExtras {
  name: string;
}

export interface Properties {
  id: Height;
  Longitude: Height;
  Latitude: Height;
  Height: Height;
}

export interface Height {
  minimum: number;
  maximum: number;
}

export interface Root {
  boundingVolume: BoundingVolume;
  geometricError: number;
  refine: string;
  content: RootContent;
  children: Child[];
}

export interface BoundingVolume {
  region: number[];
}

export interface Child {
  boundingVolume: BoundingVolume;
  geometricError: number;
  content: ChildContent;
  extras?: ChildExtras;
}

export interface ChildContent {
  uri: string;
}

export interface ChildExtras {
  id: string;
}

export interface RootContent {
  uri: string;
  boundingVolume: BoundingVolume;
}
