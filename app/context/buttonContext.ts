import { createContext } from "react";

interface ButtonContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ButtonContext = createContext<ButtonContextType>({
  isOpen: false,
  setIsOpen: () => {},
});

export default ButtonContext;
