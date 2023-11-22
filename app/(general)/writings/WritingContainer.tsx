"use client";

import { useContext, useEffect, useState } from "react";

import { Writing } from "@prisma/client";
import Link from "next/link";
import { usePathname } from "next/navigation";

<<<<<<< HEAD
=======
import { SidebarContext } from "../../provider/SidebarProvider";

>>>>>>> 1f9c790 (importの順番に関するrulesの追加)
import Header from "@/app/components/Header";
import { formatDate } from "@/app/lib/formatDate";
import { SidebarContext } from "@/app/provider/SidebarProvider";

type WritingProps = {
  writings: Writing[];
};

export default function Container({ writings }: WritingProps) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  useEffect(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const pathName = usePathname().split("/");
  const isDetail = typeof pathName[2] !== "undefined";
  const detailName = pathName[2];

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setHasScrolled(e.currentTarget.scrollTop > 0);
  };

  return (
    <div
      className={`
      ${"h-screen transition-opacity duration-500 ease-in-out lg:w-[320px]"}
      ${isDetail ? "hidden lg:block" : ""}
      ${isOpen ? "pointer-events-none z-20 opacity-5" : ""}
    `}
    >
      <div
        className={`
          ${"h-screen overflow-y-auto pb-[150px] text-[#404040] lg:w-[320px] lg:border-r-[0.5px] lg:border-r-[#eeeff2]"}
        `}
        onScroll={onScroll}
      >
        <div className="flex-col">
          <Header
            title={"Writings"}
            hasScrolled={hasScrolled}
            position={"middle"}
          />
          <div className=" pt-[64px]">
            <div className="flex-col px-[24px]">
              {writings.map(
                (writing: Writing) =>
                  writing.published && (
                    <Link href={`/writings/${writing.postId}`} key={writing.id}>
                      <div
                        className={`
                      ${"my-[4px] flex-col border-b-[1px] border-b-[#eeeff2] px-[10px] py-[6px] sm:w-[600px] md:w-[760px] lg:w-[260px] lg:rounded-lg lg:hover:bg-[#C7FBEC]"}
                      ${detailName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                      >
                        <div className="line-clamp-2">
                          <p className="text-[16px] font-bold">
                            {writing.title}
                          </p>
                        </div>
                        <p className="text-[12px] text-[#9f9f9f]">
                          {formatDate(writing.updatedAt)}
                        </p>
                      </div>
                    </Link>
                  ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
