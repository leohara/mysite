"use client";

import { useState, useEffect, useContext } from "react";

import Header from "@/app/components/Header";
import { SidebarContext } from "@/app/provider/SidebarProvider";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [hasScrolled, setHasScrolled] = useState(false);

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setHasScrolled(e.currentTarget.scrollTop > 0);
  };

  const { setIsOpen } = useContext(SidebarContext);

  useEffect(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <div
      className="min-h-screen overflow-y-auto text-[#000]"
      onScroll={onScroll}
    >
      <Header title={""} hasScrolled={hasScrolled} position={"right-detail"} />
      {children}
    </div>
  );
}
