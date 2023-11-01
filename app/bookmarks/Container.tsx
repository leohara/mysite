"use client";

import { useState } from "react";
import Header from "../components/Header";

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
      className="fixed h-screen w-[320px] overflow-y-auto border-r-[0.5px] border-[#eeeff2] bg-[#fff] pb-[24px] text-[#404040]"
      onScroll={onScroll}
    >
      <Header title={"Bookmarks"} hasScrolled={hasScrolled} isSide={false} />
      <div className="pt-[80px]">
        <div className="flex-col px-[24px]">
          {bookmarks.map((writing: Bookmark) => (
            <div key={writing.id} className="mb-[8px] flex-col">
              <p className="text-[14px] font-bold">{writing.title}</p>
              <p className="text-[14px]">{writing.content}</p>
              <p className="text-[12px] text-[#9f9f9f]">
                {new Date(writing.updatedAt).toISOString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
