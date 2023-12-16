"use client";

import { useEffect, useState, Suspense } from "react";

import { useAtom } from "jotai";

import { sidebarOpenAtom } from "@/app/(general)/state";
import Header from "@/components/Header";
import Spinner from "@/components/Spinner";

export default function Container({ children }: { children: React.ReactNode }) {
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
      <Suspense fallback={<Spinner />}>{children}</Suspense>
    </div>
  );
}
