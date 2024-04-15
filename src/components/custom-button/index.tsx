import { ButtonType } from "@/types/ButtonType";
import { Button } from "../ui/button";
import { CiSquarePlus } from "react-icons/ci";

export const CustomButton = ({ text, onClick }: ButtonType) => {
  return (
    <Button onClick={onClick} className="flex gap-2">
      <CiSquarePlus size={25} />
      {text}
    </Button>
  );
};
