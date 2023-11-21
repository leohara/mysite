"use client";

import { useState, useEffect, useContext, useTransition } from "react";
import { Writing } from "@prisma/client";
import { SidebarContext } from "@/app/provider/SidebarProvider";
import { formatDate } from "@/app/lib/formatDate";
import Header from "@/app/components/Header";
import MarkdownPreview from "@/app/components/Text/MarkdownPreview";
import { addCount } from "./actions";
import GoodButton from "./GoodButton";

type WritingProps = {
  writing: Writing;
};

export default function Layout({ writing }: WritingProps) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [count, setCount] = useState(0);
  const [likes, setLikes] = useState(writing.likes);
  const [, startTransition] = useTransition();

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setHasScrolled(e.currentTarget.scrollTop > 0);
  };

  const { setIsOpen } = useContext(SidebarContext);

  useEffect(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const clickHandler = () => {
    setIsClicked(true);
    setLikes(likes + 1);
    setCount(count + 1);
    startTransition(() => addCount(writing.id, likes));
  };

  return (
    <div className="h-screen overflow-y-auto text-[#000]" onScroll={onScroll}>
      <Header
        title={writing.title}
        hasScrolled={hasScrolled}
        position={"right-detail"}
      />
      <div className="px-[32px] pt-[50px] lg:px-[48px]">
        <div className="py-[36px] text-center">
          <h1 className="break-words px-[16px] text-[24px] font-bold">
            {writing.title}
          </h1>
          <div className="pt-[12px] text-[16px] text-[#9f9f9f]">
            <p>{formatDate(writing.publishedAt)}に公開</p>
            {formatDate(writing.publishedAt) ==
            formatDate(writing.updatedAt) ? (
              <></>
            ) : (
              <p>{formatDate(writing.updatedAt)}に更新</p>
            )}
          </div>
        </div>
        <div className="h-full flex-1">
          <MarkdownPreview content={writing.content} />
        </div>
      </div>
      <div className="pt-[50px]">
        <GoodButton
          count={count}
          isClicked={isClicked}
          likes={likes}
          clickHandler={clickHandler}
        />
      </div>
    </div>
  );
}
