"use client";

import { useState, useEffect, useContext } from "react";
import { SidebarContext } from "@/app/provider/SidebarProvider";
import Header from "@/app/components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setHasScrolled(e.currentTarget.scrollTop > 0);
  };

  const { isOpen, setIsOpen } = useContext(SidebarContext);
  useEffect(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <div
      className={`
        ${"h-screen w-screen lg:w-[calc(100vw-519px)]"}
        ${isOpen ? "pointer-events-none z-20 bg-[#ccc] opacity-5" : "bg-[#fff]"}
        `}
    >
      <div
        className="fixed h-screen w-screen overflow-y-auto pb-[200px] text-[#000] lg:w-[calc(100vw-519px)] lg:border-l-[0.5px] lg:border-l-[#eeeff2]"
        onScroll={onScroll}
      >
        <Header title={""} hasScrolled={hasScrolled} position={"right"} />
        <div className="px-[45px] pt-[80px] sm:px-[60px] md:px-[120px] lg:px-[150px]">
          {children}
        </div>
      </div>
    </div>
  );
}
