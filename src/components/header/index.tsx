import { CustomButton } from "@/components/custom-button";

export const Header = () => {
  return (
    <header className="flex justify-end" id="hd">
      <div className="flex gap-4">
        <CustomButton text="Item" onClick={() => {}} />
        <CustomButton text="Cenário" onClick={() => {}} />
        <CustomButton text="NPC" onClick={() => {}} />
        <CustomButton text="Personagem" onClick={() => {}} />
      </div>
    </header>
  );
};
