"use client";

import { useState, useEffect, useContext, useTransition } from "react";
import { Writing } from "@prisma/client";
import Header from "@/app/components/Header";
import Markdown from "@/app/components/Markdown";
import GoodButton from "./GoodButton";
import { formatDate } from "@/app/lib/formatDate";
import { SidebarContext } from "@/app/provider/SidebarProvider";
import { addCount } from "./actions";

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

  const { isOpen, setIsOpen } = useContext(SidebarContext);

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
    <div
      className={`
        ${"h-screen w-screen lg:w-[calc(100vw-520px)]"}
        ${isOpen ? "pointer-events-none z-20 bg-[#ccc] opacity-5" : "bg-[#fff]"}
        `}
    >
      <div
        className="fixed h-screen w-screen overflow-y-auto text-[#000] lg:w-[calc(100vw-520px)]"
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
            <div className="pt-[12px] text-[16px] text-[#9f9f9f]">
              <p>{formatDate(writing.createdAt)}に公開</p>
              {formatDate(writing.createdAt) ==
              formatDate(writing.updatedAt) ? (
                <></>
              ) : (
                <p>{formatDate(writing.updatedAt)}に更新</p>
              )}
            </div>
          </div>
          <Markdown content={writing.content} />
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
    </div>
  );
}
