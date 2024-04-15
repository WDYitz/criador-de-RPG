import { Image2DCreatorType } from "@/types/Image2DCreatorType";

export const Image2DCreator = ({
  type,
  largura,
  altura,
  imagePath,
  ...props
}: Image2DCreatorType) => {
  return (
    <img
      {...props}
      width={largura}
      height={altura}
      src={`./src/assets/${type}/2D/${imagePath}`}
    />
  );
};
