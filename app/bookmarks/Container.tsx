"use client";

import { useState } from "react";
import Header from "../components/Header";
import Link from "next/link";

type Bookmark = {
  id: string;
  title: string;
  url: string;
  bookmarkId: string;
  content: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export default function Container({ bookmarks }: { bookmarks: Bookmark[] }) {
  const [hasScrolled, setHasScrolled] = useState(false);

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setHasScrolled(e.currentTarget.scrollTop > 0);
  };

  return (
    <div
      className="h-screen w-[320px] border-r-[0.5px] border-r-[#eeeff2] bg-[#fff] pl-[1px]"
      onScroll={onScroll}
    >
      <div
        className="fixed overflow-y-auto pb-[24px] text-[#404040]"
        onScroll={onScroll}
      >
        <div className="flex-col">
          <Header
            title={"Bookmarks"}
            hasScrolled={hasScrolled}
            isSide={false}
          />
          <div className="pt-[80px]">
            <div className="h-screen w-[320px]">
              <div className="flex-col px-[24px]">
                {bookmarks.map((bookmark: Bookmark) => (
                  <Link
                    href={`/bookmarks/${bookmark.bookmarkId}`}
                    key={bookmark.id}
                  >
                    <div className="mb-[8px] flex-col rounded-lg p-[6px] px-[10px] hover:bg-[#C7FBEC]">
                      <p className="text-[14px] font-bold">{bookmark.title}</p>
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
    </div>
  );
}
