"use client";

import { useState } from "react";
import Header from "../components/Header";

type Writing = {
  id: string;
  title: string;
  postId: string;
  content: string | null;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export default function Container({ writings }: { writings: Writing[] }) {
  const [hasScrolled, setHasScrolled] = useState(false);

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setHasScrolled(e.currentTarget.scrollTop > 0);
  };

  return (
    <div
      className="fixed h-screen w-[320px] overflow-y-auto border-r-[0.5px] border-[#eeeff2] bg-[#fff] pb-[24px] text-[#404040]"
      onScroll={onScroll}
    >
      <Header title={"Writings"} hasScrolled={hasScrolled} isSide={false} />
      <div className="pt-[80px]">
        <div className="flex-col px-[24px]">
          {writings.map((writing: Writing) => (
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
