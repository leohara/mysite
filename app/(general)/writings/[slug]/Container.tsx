"use client";

import Header from "@/app/components/Header";
import Markdown from "@/app/components/Markdown";
import { formatDate } from "@/app/lib/formatDate";
import { SidebarContext } from "@/app/provider/SidebarProvider";
import { Writing } from "@prisma/client";
import { useContext, useEffect, useState } from "react";

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
        <div className="px-[32px] pt-[50px] lg:px-[48px]">
          <div className="py-[36px] text-center">
            <h1 className="break-words px-[16px] text-[24px] font-bold lg:w-full">
              {writing.title}
            </h1>
            <p className="pt-[12px] text-[16px] text-[#9f9f9f]">
              {formatDate(writing.createdAt)}
            </p>
          </div>
          <Markdown content={writing.content} />
        </div>
      </div>
    </div>
  );
}
