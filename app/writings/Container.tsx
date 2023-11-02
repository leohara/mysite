"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Header from "../components/Header";
import Link from "next/link";

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

  const pathName = usePathname().split("/");
  const isDetail = typeof pathName[2] !== "undefined";
  const detailName = pathName[2];

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setHasScrolled(e.currentTarget.scrollTop > 0);
  };

  return (
    <div
      className={`
      ${"h-screen w-screen bg-[#fff] pl-[1px] lg:w-[320px]"}
      ${isDetail ? "hidden lg:block lg:w-[320px]" : ""}
    `}
    >
      <div
        className="fixed h-screen pb-[50px] overflow-y-auto text-[#404040] lg:border-r-[0.5px] lg:border-r-[#eeeff2]"
        onScroll={onScroll}
      >
        <div className="flex-col">
          <Header
            title={"Writings"}
            hasScrolled={hasScrolled}
            isOpen={true}
            setIsOpen={() => {}}
            isSide={false}
          />
          <div className="w-screen pt-[60px] lg:w-[320px]">
            <div className="flex-col px-[24px]">
              {writings.map((writing: Writing) => (
                <Link href={`/writings/${writing.postId}`} key={writing.id}>
                  <div className="h-[60px] w-[calc(70vw)] border-b-[1px] lg:w-full">
                    <div
                      className={`
                      ${"my-[4px] flex-col rounded-lg p-[6px] px-[10px] hover:bg-[#C7FBEC]"}
                      ${detailName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                    >
                      <p className="text-[14px] font-bold">{writing.title}</p>
                      <p className="text-[12px] text-[#9f9f9f]">
                        {new Date(writing.updatedAt).toISOString()}
                      </p>
                    </div>
                  </div>
                  <div className="h-[60px] w-[calc(70vw)] border-b-[1px] lg:w-full">
                    <div
                      className={`
                      ${"my-[4px] flex-col rounded-lg p-[6px] px-[10px] hover:bg-[#C7FBEC]"}
                      ${detailName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                    >
                      <p className="text-[14px] font-bold">{writing.title}</p>
                      <p className="text-[12px] text-[#9f9f9f]">
                        {new Date(writing.updatedAt).toISOString()}
                      </p>
                    </div>
                  </div>
                  <div className="h-[60px] w-[calc(70vw)] border-b-[1px] lg:w-full">
                    <div
                      className={`
                      ${"my-[4px] flex-col rounded-lg p-[6px] px-[10px] hover:bg-[#C7FBEC]"}
                      ${detailName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                    >
                      <p className="text-[14px] font-bold">{writing.title}</p>
                      <p className="text-[12px] text-[#9f9f9f]">
                        {new Date(writing.updatedAt).toISOString()}
                      </p>
                    </div>
                  </div>
                  <div className="h-[60px] w-[calc(70vw)] border-b-[1px] lg:w-full">
                    <div
                      className={`
                      ${"my-[4px] flex-col rounded-lg p-[6px] px-[10px] hover:bg-[#C7FBEC]"}
                      ${detailName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                    >
                      <p className="text-[14px] font-bold">{writing.title}</p>
                      <p className="text-[12px] text-[#9f9f9f]">
                        {new Date(writing.updatedAt).toISOString()}
                      </p>
                    </div>
                  </div>
                  <div className="h-[60px] w-[calc(70vw)] border-b-[1px] lg:w-full">
                    <div
                      className={`
                      ${"my-[4px] flex-col rounded-lg p-[6px] px-[10px] hover:bg-[#C7FBEC]"}
                      ${detailName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                    >
                      <p className="text-[14px] font-bold">{writing.title}</p>
                      <p className="text-[12px] text-[#9f9f9f]">
                        {new Date(writing.updatedAt).toISOString()}
                      </p>
                    </div>
                  </div>
                  <div className="h-[60px] w-[calc(70vw)] border-b-[1px] lg:w-full">
                    <div
                      className={`
                      ${"my-[4px] flex-col rounded-lg p-[6px] px-[10px] hover:bg-[#C7FBEC]"}
                      ${detailName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                    >
                      <p className="text-[14px] font-bold">{writing.title}</p>
                      <p className="text-[12px] text-[#9f9f9f]">
                        {new Date(writing.updatedAt).toISOString()}
                      </p>
                    </div>
                  </div>
                  <div className="h-[60px] w-[calc(70vw)] border-b-[1px] lg:w-full">
                    <div
                      className={`
                      ${"my-[4px] flex-col rounded-lg p-[6px] px-[10px] hover:bg-[#C7FBEC]"}
                      ${detailName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                    >
                      <p className="text-[14px] font-bold">{writing.title}</p>
                      <p className="text-[12px] text-[#9f9f9f]">
                        {new Date(writing.updatedAt).toISOString()}
                      </p>
                    </div>
                  </div>
                  <div className="h-[60px] w-[calc(70vw)] border-b-[1px] lg:w-full">
                    <div
                      className={`
                      ${"my-[4px] flex-col rounded-lg p-[6px] px-[10px] hover:bg-[#C7FBEC]"}
                      ${detailName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                    >
                      <p className="text-[14px] font-bold">{writing.title}</p>
                      <p className="text-[12px] text-[#9f9f9f]">
                        {new Date(writing.updatedAt).toISOString()}
                      </p>
                    </div>
                  </div>
                  <div className="h-[60px] w-[calc(70vw)] border-b-[1px] lg:w-full">
                    <div
                      className={`
                      ${"my-[4px] flex-col rounded-lg p-[6px] px-[10px] hover:bg-[#C7FBEC]"}
                      ${detailName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                    >
                      <p className="text-[14px] font-bold">{writing.title}</p>
                      <p className="text-[12px] text-[#9f9f9f]">
                        {new Date(writing.updatedAt).toISOString()}
                      </p>
                    </div>
                  </div>
                  <div className="h-[60px] w-[calc(70vw)] border-b-[1px] lg:w-full">
                    <div
                      className={`
                      ${"my-[4px] flex-col rounded-lg p-[6px] px-[10px] hover:bg-[#C7FBEC]"}
                      ${detailName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                    >
                      <p className="text-[14px] font-bold">{writing.title}</p>
                      <p className="text-[12px] text-[#9f9f9f]">
                        {new Date(writing.updatedAt).toISOString()}
                      </p>
                    </div>
                  </div>
                  <div className="h-[60px] w-[calc(70vw)] border-b-[1px] lg:w-full">
                    <div
                      className={`
                      ${"my-[4px] flex-col rounded-lg p-[6px] px-[10px] hover:bg-[#C7FBEC]"}
                      ${detailName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                    >
                      <p className="text-[14px] font-bold">{writing.title}</p>
                      <p className="text-[12px] text-[#9f9f9f]">
                        {new Date(writing.updatedAt).toISOString()}
                      </p>
                    </div>
                  </div>
                  <div className="h-[60px] w-[calc(70vw)] border-b-[1px] lg:w-full">
                    <div
                      className={`
                      ${"my-[4px] flex-col rounded-lg p-[6px] px-[10px] hover:bg-[#C7FBEC]"}
                      ${detailName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                    >
                      <p className="text-[14px] font-bold">{writing.title}</p>
                      <p className="text-[12px] text-[#9f9f9f]">
                        {new Date(writing.updatedAt).toISOString()}
                      </p>
                    </div>
                  </div>
                  <div className="h-[60px] w-[calc(70vw)] border-b-[1px] lg:w-full">
                    <div
                      className={`
                      ${"my-[4px] flex-col rounded-lg p-[6px] px-[10px] hover:bg-[#C7FBEC]"}
                      ${detailName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                    >
                      <p className="text-[14px] font-bold">{writing.title}1</p>
                      <p className="text-[12px] text-[#9f9f9f]">
                        {new Date(writing.updatedAt).toISOString()}
                      </p>
                    </div>
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
