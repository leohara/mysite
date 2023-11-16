"use client";

import { useState, useEffect, useContext } from "react";
import { Writing } from "@prisma/client";
import { SidebarContext } from "@/app/provider/SidebarProvider";
import Header from "@/app/components/Header";
import Detail from "./Detail";
import { formatDate } from "@/app/lib/formatDate";

type WritingProps = {
  writing: Writing;
};

export default function Layout({ writing }: WritingProps) {
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
        ${"h-screen w-screen lg:w-[calc(100vw-520px)]"}
        ${isOpen ? "pointer-events-none z-20 bg-[#ccc] opacity-5" : "bg-[#fff]"}
        `}
    >
      <div
        className="fixed h-screen w-screen overflow-y-auto pb-[200px] text-[#000] lg:w-[calc(100vw-520px)]"
        onScroll={onScroll}
      >
        <Header
          title={writing.title}
          hasScrolled={hasScrolled}
          position={"right-detail"}
        />
        <div className="px-[32px] pt-[80px] lg:px-[48px]">
          <div className="grid place-items-center py-[36px]">
            <h1 className="text-[24px]">{writing.title}</h1>
            <p className="pt-[12px] text-[16px] text-[#9f9f9f]">
              {formatDate(writing.updatedAt)}
            </p>
          </div>
          <Detail content={writing.content} />
        </div>
      </div>
    </div>
  );
}
