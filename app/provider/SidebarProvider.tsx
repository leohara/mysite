"use client";

import { useState, createContext } from "react";

const sidebarContext = {
  isOpen: false,
  setIsOpen: (_isOpen: boolean) => {},
};

export const SidebarContext = createContext(sidebarContext);

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
