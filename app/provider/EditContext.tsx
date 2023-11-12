import { createContext } from "react";

type EditContextType = {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  link: string;
  setLink: React.Dispatch<React.SetStateAction<string>>;
  isDraft: boolean;
  setIsDraft: React.Dispatch<React.SetStateAction<boolean>>;
};

export const EditContext = createContext<EditContextType>({
  title: "",
  setTitle: (title) => {},
  link: "",
  setLink: (link) => {},
  isDraft: true,
  setIsDraft: (isDraft) => {},
});
