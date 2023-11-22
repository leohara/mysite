"use client";

import { useState, useEffect, useContext } from "react";

import Container from "./Container";

import Header from "@/app/components/Header";
import { SidebarContext } from "@/app/provider/SidebarProvider";

export default function Page() {
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
        ${"h-screen overflow-y-auto pb-[150px] text-[#050505] transition-opacity duration-500 ease-in-out"}
        ${isOpen ? "pointer-events-none z-20 opacity-5" : ""}
        `}
      onScroll={onScroll}
    >
      <Header title={""} hasScrolled={hasScrolled} position={"right"} />
      <div
        className={`
        ${"px-[15px] pt-[80px] sm:px-[60px] md:px-[120px] lg:px-[150px]"}
        ${isOpen ? "opacity-0" : "opacity-100"}
      `}
      >
        <Container />
      </div>
    </div>
  );
}
