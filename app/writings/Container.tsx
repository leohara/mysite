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

  const pathName = usePathname()
    .split("/")
    .filter((segment) => segment != "")[1];

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setHasScrolled(e.currentTarget.scrollTop > 0);
  };

  return (
    <div className="h-screen w-[320px] border-r-[0.5px] border-r-[#eeeff2] bg-[#fff]">
      <div
        className="fixed overflow-y-auto pb-[24px] text-[#404040]"
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
          <div className="pt-[80px]">
            <div className="h-screen w-[320px]">
              <div className="flex-col px-[24px]">
                {writings.map((writing: Writing) => (
                  <Link href={`/writings/${writing.postId}`} key={writing.id}>
                    <div
                      className={`
                      ${"mb-[8px] flex-col rounded-lg p-[6px] px-[10px] hover:bg-[#C7FBEC]"}
                      ${pathName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                    >
                      <p className="text-[14px] font-bold">{writing.title}</p>
                      <p className="text-[12px] text-[#9f9f9f]">
                        {new Date(writing.updatedAt).toISOString()}
                      </p>
                    </div>
                    <div
                      className={`
                      ${"mb-[8px] flex-col rounded-lg p-[6px] px-[10px] hover:bg-[#C7FBEC]"}
                      ${pathName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                    >
                      <p className="text-[14px] font-bold">{writing.title}</p>
                      <p className="text-[12px] text-[#9f9f9f]">
                        {new Date(writing.updatedAt).toISOString()}
                      </p>
                    </div>
                    <div
                      className={`
                      ${"mb-[8px] flex-col rounded-lg p-[6px] px-[10px] hover:bg-[#C7FBEC]"}
                      ${pathName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                    >
                      <p className="text-[14px] font-bold">{writing.title}</p>
                      <p className="text-[12px] text-[#9f9f9f]">
                        {new Date(writing.updatedAt).toISOString()}
                      </p>
                    </div>
                    <div
                      className={`
                      ${"mb-[8px] flex-col rounded-lg p-[6px] px-[10px] hover:bg-[#C7FBEC]"}
                      ${pathName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                    >
                      <p className="text-[14px] font-bold">{writing.title}</p>
                      <p className="text-[12px] text-[#9f9f9f]">
                        {new Date(writing.updatedAt).toISOString()}
                      </p>
                    </div>
                    <div
                      className={`
                      ${"mb-[8px] flex-col rounded-lg p-[6px] px-[10px] hover:bg-[#C7FBEC]"}
                      ${pathName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                    >
                      <p className="text-[14px] font-bold">{writing.title}</p>
                      <p className="text-[12px] text-[#9f9f9f]">
                        {new Date(writing.updatedAt).toISOString()}
                      </p>
                    </div>
                    <div
                      className={`
                      ${"mb-[8px] flex-col rounded-lg p-[6px] px-[10px] hover:bg-[#C7FBEC]"}
                      ${pathName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                    >
                      <p className="text-[14px] font-bold">{writing.title}</p>
                      <p className="text-[12px] text-[#9f9f9f]">
                        {new Date(writing.updatedAt).toISOString()}
                      </p>
                    </div>
                    <div
                      className={`
                      ${"mb-[8px] flex-col rounded-lg p-[6px] px-[10px] hover:bg-[#C7FBEC]"}
                      ${pathName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                    >
                      <p className="text-[14px] font-bold">{writing.title}</p>
                      <p className="text-[12px] text-[#9f9f9f]">
                        {new Date(writing.updatedAt).toISOString()}
                      </p>
                    </div>
                    <div
                      className={`
                      ${"mb-[8px] flex-col rounded-lg p-[6px] px-[10px] hover:bg-[#C7FBEC]"}
                      ${pathName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                    >
                      <p className="text-[14px] font-bold">{writing.title}</p>
                      <p className="text-[12px] text-[#9f9f9f]">
                        {new Date(writing.updatedAt).toISOString()}
                      </p>
                    </div>
                    <div
                      className={`
                      ${"mb-[8px] flex-col rounded-lg p-[6px] px-[10px] hover:bg-[#C7FBEC]"}
                      ${pathName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                    >
                      <p className="text-[14px] font-bold">{writing.title}</p>
                      <p className="text-[12px] text-[#9f9f9f]">
                        {new Date(writing.updatedAt).toISOString()}
                      </p>
                    </div>
                    <div
                      className={`
                      ${"mb-[8px] flex-col rounded-lg p-[6px] px-[10px] hover:bg-[#C7FBEC]"}
                      ${pathName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                    >
                      <p className="text-[14px] font-bold">{writing.title}</p>
                      <p className="text-[12px] text-[#9f9f9f]">
                        {new Date(writing.updatedAt).toISOString()}
                      </p>
                    </div>
                    <div
                      className={`
                      ${"mb-[8px] flex-col rounded-lg p-[6px] px-[10px] hover:bg-[#C7FBEC]"}
                      ${pathName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                    >
                      <p className="text-[14px] font-bold">{writing.title}</p>
                      <p className="text-[12px] text-[#9f9f9f]">
                        {new Date(writing.updatedAt).toISOString()}
                      </p>
                    </div>
                    <div
                      className={`
                      ${"mb-[8px] flex-col rounded-lg p-[6px] px-[10px] hover:bg-[#C7FBEC]"}
                      ${pathName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                    >
                      <p className="text-[14px] font-bold">{writing.title}</p>
                      <p className="text-[12px] text-[#9f9f9f]">
                        {new Date(writing.updatedAt).toISOString()}
                      </p>
                    </div>
                    <div
                      className={`
                      ${"mb-[8px] flex-col rounded-lg p-[6px] px-[10px] hover:bg-[#C7FBEC]"}
                      ${pathName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                    >
                      <p className="text-[14px] font-bold">{writing.title}</p>
                      <p className="text-[12px] text-[#9f9f9f]">
                        {new Date(writing.updatedAt).toISOString()}
                      </p>
                    </div>
                    <div
                      className={`
                      ${"mb-[8px] flex-col rounded-lg p-[6px] px-[10px] hover:bg-[#C7FBEC]"}
                      ${pathName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                    >
                      <p className="text-[14px] font-bold">{writing.title}</p>
                      <p className="text-[12px] text-[#9f9f9f]">
                        {new Date(writing.updatedAt).toISOString()}
                      </p>
                    </div>
                    <div
                      className={`
                      ${"mb-[8px] flex-col rounded-lg p-[6px] px-[10px] hover:bg-[#C7FBEC]"}
                      ${pathName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                    >
                      <p className="text-[14px] font-bold">{writing.title}</p>
                      <p className="text-[12px] text-[#9f9f9f]">
                        {new Date(writing.updatedAt).toISOString()}
                      </p>
                    </div>
                    <div
                      className={`
                      ${"mb-[8px] flex-col rounded-lg p-[6px] px-[10px] hover:bg-[#C7FBEC]"}
                      ${pathName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                    >
                      <p className="text-[14px] font-bold">{writing.title}</p>
                      <p className="text-[12px] text-[#9f9f9f]">
                        {new Date(writing.updatedAt).toISOString()}
                      </p>
                    </div>
                    <div
                      className={`
                      ${"mb-[8px] flex-col rounded-lg p-[6px] px-[10px] hover:bg-[#C7FBEC]"}
                      ${pathName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                    >
                      <p className="text-[14px] font-bold">{writing.title}</p>
                      <p className="text-[12px] text-[#9f9f9f]">
                        {new Date(writing.updatedAt).toISOString()}
                      </p>
                    </div>
                    <div
                      className={`
                      ${"mb-[8px] flex-col rounded-lg p-[6px] px-[10px] hover:bg-[#C7FBEC]"}
                      ${pathName == writing.postId ? "!bg-[aquamarine]" : ""}
                      `}
                    >
                      <p className="text-[14px] font-bold">{writing.title}</p>
                      <p className="text-[12px] text-[#9f9f9f]">
                        {new Date(writing.updatedAt).toISOString()}
                      </p>
                    </div>
                    <div
                      className={`
                      ${"mb-[8px] flex-col rounded-lg p-[6px] px-[10px] hover:bg-[#C7FBEC]"}
                      ${pathName == writing.postId ? "!bg-[aquamarine]" : ""}
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
    </div>
  );
}
