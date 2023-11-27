"use client";

import { useState, useEffect } from "react";

import Header from "@/app/components/Header";

import { useAtom } from "jotai";
import { sidebarOpenAtom } from "@/app/(general)/state";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [hasScrolled, setHasScrolled] = useState(false);

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setHasScrolled(e.currentTarget.scrollTop > 0);
  };

  const [ , setIsOpen ] = useAtom(sidebarOpenAtom);

  useEffect(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <div className="h-dvh overflow-y-auto text-[#000]" onScroll={onScroll}>
      <Header title={""} hasScrolled={hasScrolled} position={"right-detail"} />
      {children}
    </div>
  );
}
