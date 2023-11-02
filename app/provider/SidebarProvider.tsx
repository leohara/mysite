"use client";

import { useState, createContext } from "react";

type SidebarContextType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const sidebarContext = {
  isOpen: false,
  setIsOpen: () => {},
};

export const SidebarContext = createContext<SidebarContextType>(sidebarContext);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}
