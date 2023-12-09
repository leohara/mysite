"use client";

import { Writing } from "@prisma/client";

import Copyright from "../../../../../components/Copyright";

import GoodButton from "./GoodButton";

import { formatDate } from "@/app/lib/formatDate";
import { MarkdownPreview } from "@/components/Text/MarkdownPreview";

export default async function Post({ writing }: { writing: Writing }) {
  return (
    <>
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
              <p>{formatDate(writing?.updatedAt)}に更新</p>
            )}
          </div>
        </div>
        <div className="h-full flex-1">
          <MarkdownPreview content={writing.content} />
        </div>
      </div>
      <div className="py-[30px]">
        <GoodButton likes={writing.likes || 0} id={writing.id || ""} />
      </div>
      <div className="flex justify-center">
        <Copyright />
      </div>
    </>
  );
}
