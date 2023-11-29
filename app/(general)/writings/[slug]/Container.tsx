"use client";

import { useEffect, useState, Suspense } from "react";

import { useAtom } from "jotai";

import { sidebarOpenAtom } from "@/app/(general)/state";
import Header from "@/components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [hasScrolled, setHasScrolled] = useState(false);

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setHasScrolled(e.currentTarget.scrollTop > 0);
  };

  const [, setIsOpen] = useAtom(sidebarOpenAtom);

  useEffect(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <div className="h-dvh overflow-y-auto text-[#000]" onScroll={onScroll}>
      <Header title={""} hasScrolled={hasScrolled} position={"right-detail"} />
      <Suspense fallback={<p className="text-center">Loading</p>}>
        {children}
      </Suspense>
    </div>
  );
}
