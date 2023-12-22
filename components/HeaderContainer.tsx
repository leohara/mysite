"use client";

import { useEffect, useState } from "react";

import { useAtom } from "jotai";
import { usePathname } from "next/navigation";

import { sidebarOpenAtom } from "@/app/(general)/state";
import Header from "@/components/Header";

function headerName(categoryName: string, position: string) {
  if (position == "right-detail") {
    return "";
  } else if (categoryName == "writings" || categoryName == "projects") {
    return categoryName;
  } else if (categoryName == "about") {
    return "About Me";
  }
}

export default function HeaderContainer({
  children,
  position,
}: {
  children: React.ReactNode;
  position: string;
}) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setHasScrolled(e.currentTarget.scrollTop > 0);
  };

  const [isOpen, setIsOpen] = useAtom(sidebarOpenAtom);
  useEffect(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const pathName = usePathname().split("/");
  const categoryName = pathName[1];

  return (
    <div
      className={`
      ${"h-dvh overflow-y-auto pb-[200px] text-[#050505] transition-opacity duration-500 ease-in-out"}
      ${isOpen ? "pointer-events-none z-20 opacity-5" : ""}
      ${!Boolean(categoryName)! && position == "right" ? "bg-svg" : ""}
      `}
      onScroll={onScroll}
    >
      <Header
        title={headerName(categoryName, position) ?? ""}
        hasScrolled={hasScrolled}
        position={position}
      />
      {position == "right" ? (
        <div
          className={`
        ${"px-[45px] pt-[80px] sm:px-[60px] md:px-[120px] lg:px-[150px]"}
        ${isOpen ? "opacity-0" : "opacity-100"}
      `}
        >
          {children}
        </div>
      ) : (
        <>{children}</>
      )}
    </div>
  );
}
