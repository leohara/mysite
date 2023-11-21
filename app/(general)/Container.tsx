"use client";

import { useContext } from "react";
import { SidebarContext } from "../provider/SidebarProvider";
import Sidebar from "./Sidebar";

export default function Container({ children }: { children: React.ReactNode }) {
  const { isOpen } = useContext(SidebarContext);

  return (
    <div
      className={`
      ${"grid transition-all duration-500 ease-in-out"}
      ${
        isOpen
          ? "grid-cols-[320px_1fr]"
          : "grid-cols-[0px_1fr] lg:grid-cols-[200px_1fr]"
      }
    `}
    >
      <Sidebar />
      {children}
    </div>
  );
}
