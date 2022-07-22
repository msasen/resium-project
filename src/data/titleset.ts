import { Titleset } from "@/interfaces/Ititleset";

const titleset: Titleset = {
  asset: {
    version: "1.0",
    tilesetVersion: "1.2.3",
  },
  extras: {
    name: "Sample Tileset",
  },
  properties: {
    id: {
      minimum: 0,
      maximum: 9,
    },
    Longitude: {
      minimum: -1.3197192952275933,
      maximum: -1.319644104024109,
    },
    Latitude: {
      minimum: 0.698848878034009,
      maximum: 0.6989046192460953,
    },
    Height: {
      minimum: 6.161747192963958,
      maximum: 85.41026367992163,
    },
  },
  geometricError: 240,
  root: {
    boundingVolume: {
      region: [-1.3197209591796106, 0.6988424218, -1.3196390408203893, 0.6989055782, 0, 88],
    },
    geometricError: 70,
    refine: "ADD",
    content: {
      uri: "parent.b3dm",
      boundingVolume: {
        region: [-1.3197004795898053, 0.6988582109, -1.3196595204101946, 0.6988897891, 0, 88],
      },
    },
    children: [
      {
        boundingVolume: {
          region: [-1.3197209591796106, 0.6988424218, -1.31968, 0.698874, 0, 20],
        },
        geometricError: 0,
        content: {
          uri: "ll.b3dm",
        },
      },
      {
        boundingVolume: {
          region: [-1.31968, 0.6988424218, -1.3196390408203893, 0.698874, 0, 20],
        },
        geometricError: 0,
        content: {
          uri: "lr.b3dm",
        },
        extras: {
          id: "Special Tile",
        },
      },
      {
        boundingVolume: {
          region: [-1.31968, 0.698874, -1.3196390408203893, 0.6989055782, 0, 20],
        },
        geometricError: 0,
        content: {
          uri: "ur.b3dm",
        },
      },
      {
        boundingVolume: {
          region: [-1.3197209591796106, 0.698874, -1.31968, 0.6989055782, 0, 20],
        },
        geometricError: 0,
        content: {
          uri: "ul.b3dm",
        },
      },
    ],
  },
};

export default { titleset };
