"use client";

import { Writing } from "@prisma/client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { formatDate } from "@/app/lib/formatDate";

type Props = {
  writing: Writing;
};

export default function WritingCard({ writing }: Props) {
  const pathName = usePathname().split("/");
  const detailName = pathName[2];

  return (
    <>
      writing.published && (
      <Link href={`/writings/${writing.postId}`}>
        <div
          className={`
        ${"my-[4px] flex-col border-b-[1px] border-b-[#eeeff2] px-[10px] py-[6px] sm:w-[600px] md:w-[760px] lg:w-[260px] lg:rounded-lg lg:hover:bg-[#C7FBEC]"}
        ${detailName == writing.postId ? "!bg-[aquamarine]" : ""}
        `}
        >
          <div className="line-clamp-2">
            <p className="text-[16px] font-bold">{writing.title}</p>
          </div>
          <p className="text-[12px] text-[#9f9f9f]">
            {formatDate(writing.updatedAt)}
          </p>
        </div>
      </Link>
      )
    </>
  );
}
