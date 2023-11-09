"use client";

import { useState, useContext } from "react";
import { usePathname } from "next/navigation";
import Header from "@/app/components/Header";
import Link from "next/link";
import { SidebarContext } from "../provider/SidebarProvider";

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
  const { isOpen } = useContext(SidebarContext);

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
          ${"fixed h-screen w-full lg:w-[320px] overflow-y-auto pb-[300px] text-[#404040] lg:border-r-[0.5px] lg:border-r-[#eeeff2]"}
        `}
        onScroll={onScroll}
      >
        <div className="flex-col">
          <Header
            title={"Writings"}
            hasScrolled={hasScrolled}
            position={"middle"}
          />
          <div className=" pt-[60px] lg:w-[320px]">
            <div className="flex-col px-[24px]">
              {writings.map((writing: Writing) => (
                <Link href={`/writings/${writing.postId}`} key={writing.id}>
                  <div
                    className={`
                      ${"my-[4px] h-[60px] w-full flex-col rounded-lg border-b-[1px] border-b-[#eeeff2] p-[6px] px-[10px] hover:bg-[#C7FBEC] sm:w-[600px] md:w-[760px] lg:w-[260px]"}
                      ${detailName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                  >
                    <p className="text-[14px] font-bold">{writing.title}</p>
                    <p className="text-[12px] text-[#9f9f9f]">
                      {new Date(writing.updatedAt).toISOString()}
                    </p>
                  </div>
                </Link>
              ))}
              {writings.map((writing: Writing) => (
                <Link href={`/writings/${writing.postId}`} key={writing.id}>
                  <div
                    className={`
                      ${"my-[4px] h-[60px] w-full flex-col rounded-lg border-b-[1px] border-b-[#eeeff2] p-[6px] px-[10px] hover:bg-[#C7FBEC] sm:w-[600px] md:w-[760px] lg:w-[260px]"}
                      ${detailName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                  >
                    <p className="text-[14px] font-bold">{writing.title}</p>
                    <p className="text-[12px] text-[#9f9f9f]">
                      {new Date(writing.updatedAt).toISOString()}
                    </p>
                  </div>
                </Link>
              ))}
              {writings.map((writing: Writing) => (
                <Link href={`/writings/${writing.postId}`} key={writing.id}>
                  <div
                    className={`
                      ${"my-[4px] h-[60px] w-full flex-col rounded-lg border-b-[1px] border-b-[#eeeff2] p-[6px] px-[10px] hover:bg-[#C7FBEC] sm:w-[600px] md:w-[760px] lg:w-[260px]"}
                      ${detailName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                  >
                    <p className="text-[14px] font-bold">{writing.title}</p>
                    <p className="text-[12px] text-[#9f9f9f]">
                      {new Date(writing.updatedAt).toISOString()}
                    </p>
                  </div>
                </Link>
              ))}
              {writings.map((writing: Writing) => (
                <Link href={`/writings/${writing.postId}`} key={writing.id}>
                  <div
                    className={`
                      ${"my-[4px] h-[60px] w-full flex-col rounded-lg border-b-[1px] border-b-[#eeeff2] p-[6px] px-[10px] hover:bg-[#C7FBEC] sm:w-[600px] md:w-[760px] lg:w-[260px]"}
                      ${detailName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                  >
                    <p className="text-[14px] font-bold">{writing.title}</p>
                    <p className="text-[12px] text-[#9f9f9f]">
                      {new Date(writing.updatedAt).toISOString()}
                    </p>
                  </div>
                </Link>
              ))}
              {writings.map((writing: Writing) => (
                <Link href={`/writings/${writing.postId}`} key={writing.id}>
                  <div
                    className={`
                      ${"my-[4px] h-[60px] w-full flex-col rounded-lg border-b-[1px] border-b-[#eeeff2] p-[6px] px-[10px] hover:bg-[#C7FBEC] sm:w-[600px] md:w-[760px] lg:w-[260px]"}
                      ${detailName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                  >
                    <p className="text-[14px] font-bold">{writing.title}</p>
                    <p className="text-[12px] text-[#9f9f9f]">
                      {new Date(writing.updatedAt).toISOString()}
                    </p>
                  </div>
                </Link>
              ))}
              {writings.map((writing: Writing) => (
                <Link href={`/writings/${writing.postId}`} key={writing.id}>
                  <div
                    className={`
                      ${"my-[4px] h-[60px] w-full flex-col rounded-lg border-b-[1px] border-b-[#eeeff2] p-[6px] px-[10px] hover:bg-[#C7FBEC] sm:w-[600px] md:w-[760px] lg:w-[260px]"}
                      ${detailName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                  >
                    <p className="text-[14px] font-bold">{writing.title}</p>
                    <p className="text-[12px] text-[#9f9f9f]">
                      {new Date(writing.updatedAt).toISOString()}
                    </p>
                  </div>
                </Link>
              ))}
              {writings.map((writing: Writing) => (
                <Link href={`/writings/${writing.postId}`} key={writing.id}>
                  <div
                    className={`
                      ${"my-[4px] h-[60px] w-full flex-col rounded-lg border-b-[1px] border-b-[#eeeff2] p-[6px] px-[10px] hover:bg-[#C7FBEC] sm:w-[600px] md:w-[760px] lg:w-[260px]"}
                      ${detailName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                  >
                    <p className="text-[14px] font-bold">{writing.title}</p>
                    <p className="text-[12px] text-[#9f9f9f]">
                      {new Date(writing.updatedAt).toISOString()}
                    </p>
                  </div>
                </Link>
              ))}
              {writings.map((writing: Writing) => (
                <Link href={`/writings/${writing.postId}`} key={writing.id}>
                  <div
                    className={`
                      ${"my-[4px] h-[60px] w-full flex-col rounded-lg border-b-[1px] border-b-[#eeeff2] p-[6px] px-[10px] hover:bg-[#C7FBEC] sm:w-[600px] md:w-[760px] lg:w-[260px]"}
                      ${detailName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                  >
                    <p className="text-[14px] font-bold">{writing.title}</p>
                    <p className="text-[12px] text-[#9f9f9f]">
                      {new Date(writing.updatedAt).toISOString()}
                    </p>
                  </div>
                </Link>
              ))}
              {writings.map((writing: Writing) => (
                <Link href={`/writings/${writing.postId}`} key={writing.id}>
                  <div
                    className={`
                      ${"my-[4px] h-[60px] w-full flex-col rounded-lg border-b-[1px] border-b-[#eeeff2] p-[6px] px-[10px] hover:bg-[#C7FBEC] sm:w-[600px] md:w-[760px] lg:w-[260px]"}
                      ${detailName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                  >
                    <p className="text-[14px] font-bold">{writing.title}</p>
                    <p className="text-[12px] text-[#9f9f9f]">
                      {new Date(writing.updatedAt).toISOString()}
                    </p>
                  </div>
                </Link>
              ))}
              {writings.map((writing: Writing) => (
                <Link href={`/writings/${writing.postId}`} key={writing.id}>
                  <div
                    className={`
                      ${"my-[4px] h-[60px] w-full flex-col rounded-lg border-b-[1px] border-b-[#eeeff2] p-[6px] px-[10px] hover:bg-[#C7FBEC] sm:w-[600px] md:w-[760px] lg:w-[260px]"}
                      ${detailName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                  >
                    <p className="text-[14px] font-bold">{writing.title}</p>
                    <p className="text-[12px] text-[#9f9f9f]">
                      {new Date(writing.updatedAt).toISOString()}
                    </p>
                  </div>
                </Link>
              ))}
              {writings.map((writing: Writing) => (
                <Link href={`/writings/${writing.postId}`} key={writing.id}>
                  <div
                    className={`
                      ${"my-[4px] h-[60px] w-full flex-col rounded-lg border-b-[1px] border-b-[#eeeff2] p-[6px] px-[10px] hover:bg-[#C7FBEC] sm:w-[600px] md:w-[760px] lg:w-[260px]"}
                      ${detailName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                  >
                    <p className="text-[14px] font-bold">{writing.title}</p>
                    <p className="text-[12px] text-[#9f9f9f]">
                      {new Date(writing.updatedAt).toISOString()}
                    </p>
                  </div>
                </Link>
              ))}
              {writings.map((writing: Writing) => (
                <Link href={`/writings/${writing.postId}`} key={writing.id}>
                  <div
                    className={`
                      ${"my-[4px] h-[60px] w-full flex-col rounded-lg border-b-[1px] border-b-[#eeeff2] p-[6px] px-[10px] hover:bg-[#C7FBEC] sm:w-[600px] md:w-[760px] lg:w-[260px]"}
                      ${detailName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                  >
                    <p className="text-[14px] font-bold">{writing.title}</p>
                    <p className="text-[12px] text-[#9f9f9f]">
                      {new Date(writing.updatedAt).toISOString()}
                    </p>
                  </div>
                </Link>
              ))}
              {writings.map((writing: Writing) => (
                <Link href={`/writings/${writing.postId}`} key={writing.id}>
                  <div
                    className={`
                      ${"my-[4px] h-[60px] w-full flex-col rounded-lg border-b-[1px] border-b-[#eeeff2] p-[6px] px-[10px] hover:bg-[#C7FBEC] sm:w-[600px] md:w-[760px] lg:w-[260px]"}
                      ${detailName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                  >
                    <p className="text-[14px] font-bold">{writing.title}</p>
                    <p className="text-[12px] text-[#9f9f9f]">
                      {new Date(writing.updatedAt).toISOString()}
                    </p>
                  </div>
                </Link>
              ))}
              {writings.map((writing: Writing) => (
                <Link href={`/writings/${writing.postId}`} key={writing.id}>
                  <div
                    className={`
                      ${"my-[4px] h-[60px] w-full flex-col rounded-lg border-b-[1px] border-b-[#eeeff2] p-[6px] px-[10px] hover:bg-[#C7FBEC] sm:w-[600px] md:w-[760px] lg:w-[260px]"}
                      ${detailName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                  >
                    <p className="text-[14px] font-bold">{writing.title}</p>
                    <p className="text-[12px] text-[#9f9f9f]">
                      {new Date(writing.updatedAt).toISOString()}
                    </p>
                  </div>
                </Link>
              ))}
              {writings.map((writing: Writing) => (
                <Link href={`/writings/${writing.postId}`} key={writing.id}>
                  <div
                    className={`
                      ${"my-[4px] h-[60px] w-full flex-col rounded-lg border-b-[1px] border-b-[#eeeff2] p-[6px] px-[10px] hover:bg-[#C7FBEC] sm:w-[600px] md:w-[760px] lg:w-[260px]"}
                      ${detailName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                  >
                    <p className="text-[14px] font-bold">{writing.title}</p>
                    <p className="text-[12px] text-[#9f9f9f]">
                      {new Date(writing.updatedAt).toISOString()}
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
