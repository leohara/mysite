import { createContext } from "react";

type EditContextType = {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  link: string;
  setLink: React.Dispatch<React.SetStateAction<string>>;
  isPublished: boolean;
  setIsPublished: React.Dispatch<React.SetStateAction<boolean>>;
};

export const EditContext = createContext<EditContextType>({
  title: "",
  setTitle: () => {},
  link: "",
  setLink: () => {},
  isPublished: true,
  setIsPublished: () => {},
});