"use client";

import Header from "@/app/components/Header";
import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../provider/SidebarProvider";

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
      ${"bg-haikei h-screen overflow-y-auto pb-[200px] text-[#050505] transition-opacity duration-500 ease-in-out"}
      ${isOpen ? "pointer-events-none z-20 opacity-5" : ""}
      `}
      onScroll={onScroll}
    >
      <Header title={""} hasScrolled={hasScrolled} position={"right"} />
      <div className="px-[45px] pt-[80px] sm:px-[60px] md:px-[120px] lg:px-[150px]">
        <p>
          このサイトは、ソフトウェアエンジニア原田零生のポートフォリオです。本サイトでは自身の制作実績や技術ブログを掲載しています。
        </p>
      </div>
    </div>
  );
}
