"use client";

import { useEffect, useState, Suspense } from "react";

import { useAtom } from "jotai";
import { usePathname } from "next/navigation";

import { sidebarOpenAtom } from "@/app/(general)/state";
import Header from "@/components/Header";
import Loading from "@/components/Loading";

export default function Container({ children }: { children: React.ReactNode }) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useAtom(sidebarOpenAtom);
  useEffect(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const pathName = usePathname().split("/");
  const isDetail = typeof pathName[2] !== "undefined";

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setHasScrolled(e.currentTarget.scrollTop > 0);
  };

  return (
    <div
      className={`
    ${"h-dvh transition-opacity duration-500 ease-in-out lg:w-[320px]"}
    ${isDetail ? "hidden lg:block" : ""}
    ${isOpen ? "pointer-events-none z-20 opacity-5" : ""}
  `}
    >
      <div
        className={`
        ${"h-dvh overflow-y-auto pb-[50px] text-[#404040] lg:w-[320px] lg:border-r-[0.5px] lg:border-r-[#eeeff2]"}
        `}
        onScroll={onScroll}
      >
        <div className="flex-col">
          <Header
            title={"Writings"}
            hasScrolled={hasScrolled}
            position={"middle"}
          />
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </div>
      </div>
    </div>
  );
}
