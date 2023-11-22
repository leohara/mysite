"use client";

import { useContext } from "react";

<<<<<<< HEAD
<<<<<<< HEAD
=======
import { SidebarContext } from "../provider/SidebarProvider";
=======
import { SidebarContext } from "@/app/provider/SidebarProvider";
>>>>>>> 2cdf5c0 (appルートに変更)

>>>>>>> 1f9c790 (importの順番に関するrulesの追加)
import Sidebar from "./Sidebar";

import { SidebarContext } from "@/app/provider/SidebarProvider";

export default function Container({ children }: { children: React.ReactNode }) {
  const { isOpen } = useContext(SidebarContext);

  return (
    <div
      className={`
      ${"grid transition-all duration-500 ease-in-out"}
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
