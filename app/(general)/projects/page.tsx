"use client";

import { useEffect, useState } from "react";

import { useAtom } from "jotai";

import Container from "./Container";

import { sidebarOpenAtom } from "@/app/(general)/state";
import Header from "@/components/Header";

export default function Page() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setHasScrolled(e.currentTarget.scrollTop > 0);
  };

  const [isOpen, setIsOpen] = useAtom(sidebarOpenAtom);
  useEffect(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <div
      className={`
        ${"h-dvh overflow-y-auto text-[#050505] transition-opacity duration-500 ease-in-out"}
        ${isOpen ? "pointer-events-none z-20 opacity-5" : ""}
        `}
      onScroll={onScroll}
    >
      <Header title={"Projects"} hasScrolled={hasScrolled} position={"right"} />
      <div
        className={`
        ${"px-[30px] pt-[80px] md:px-[100px] lg:px-[120px]"}
        ${isOpen ? "opacity-0" : "opacity-100"}
      `}
      >
        <Container />
      </div>
    </div>
  );
}
