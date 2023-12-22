"use client";

import { useAtom } from "jotai";

import { sidebarOpenAtom } from "../app/(general)/state";

import Sidebar from "./Sidebar";

export default function SidebarContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen] = useAtom(sidebarOpenAtom);

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
