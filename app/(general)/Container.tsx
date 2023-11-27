"use client";

import Sidebar from "./_presenter/Sidebar";
import { useAtom } from "jotai";
import { sidebarOpenAtom } from "./state";

export default function Container({ children }: { children: React.ReactNode }) {
  const [isOpen, ] = useAtom(sidebarOpenAtom)

  return (
    <div
      className={`
      ${"grid h-dvh transition-all duration-500 ease-in-out"}
      ${
        isOpen
          ? "grid-cols-[300px_1fr]"
          : "grid-cols-[0px_1fr] lg:grid-cols-[200px_1fr]"
      }
    `}
    >
      <Sidebar />
      {children}
    </div>
  );
}
