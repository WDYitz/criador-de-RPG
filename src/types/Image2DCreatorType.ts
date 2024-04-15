type ImageType = "items" | "scenario" | "character" | "npc"

export type Image2DCreatorType = {
  largura: number;
  altura: number;
  type: ImageType;
  imagePath: any,
}