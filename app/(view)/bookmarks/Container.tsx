"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import { SidebarContext } from "../../provider/SidebarProvider";

type Bookmark = {
  id: string;
  title: string;
  url: string;
  bookmarkId: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
};

export default function Container({ bookmarks }: { bookmarks: Bookmark[] }) {
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
    ${"h-screen pl-[1px] lg:w-[320px]"}
    ${isDetail ? "hidden lg:block" : ""}
    ${isOpen ? "pointer-events-none z-20 bg-[#ccc] opacity-5" : "bg-[#fff]"}
  `}
    >
      <div
        className={`
      ${"fixed h-screen w-full overflow-y-auto pb-[300px] text-[#404040] lg:w-[320px] lg:border-r-[0.5px] lg:border-r-[#eeeff2]"}
        ${isDetail ? "" : "w-full"}
      `}
        onScroll={onScroll}
      >
        <div className="flex-col">
          <Header
            title={"Bookmarks"}
            hasScrolled={hasScrolled}
            position={"middle"}
          />
          <div className=" pt-[60px] lg:w-[320px]">
            <div className="flex-col px-[24px]">
              {bookmarks.map((bookmark: Bookmark) => (
                <Link href={`/`} key={bookmark.id}>
                  <div
                    className={`
                  ${"my-[4px] h-[60px] w-full flex-col rounded-lg border-b-[1px] border-b-[#eeeff2] p-[6px] px-[10px] hover:bg-[#C7FBEC] sm:w-[600px] md:w-[760px] lg:w-[260px]"}
                    ${
                      detailName == bookmark.bookmarkId
                        ? "!bg-[aquamarine]"
                        : ""
                    }
                    `}
                  >
                    <p className="text-[14px] font-bold"></p>
                    <p className="text-[12px] text-[#9f9f9f]">
                      {new Date(bookmark.updatedAt).toISOString()}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
