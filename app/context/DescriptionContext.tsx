import { createContext } from "react";

export type DescriptionContextType = {
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
};

export const DescriptionContext = createContext<DescriptionContextType>({
  description: "",
  setDescription: () => {},
});
