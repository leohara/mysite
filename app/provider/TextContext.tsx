import { createContext } from "react";

type TextContextType = {
  markdown: string;
  setMarkdown: React.Dispatch<React.SetStateAction<string>>;
};

export const TextContext = createContext<TextContextType>({
  markdown: "",
  setMarkdown: (markdown) => {},
});
