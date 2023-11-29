import Copyright from "../../../../../components/Copyright";

import GoodButton from "./GoodButton";

import { formatDate } from "@/app/lib/formatDate";
import MarkdownPreview from "@/components/Text/MarkdownPreview";

import { getWriting } from "@/components/writing";

export default async function Post({ postId }: { postId: string }) {
  const writing = await getWriting(postId);

  return (
    <>
      <div className="px-[32px] pt-[50px] lg:px-[48px]">
        <div className="py-[36px] text-center">
          <h1 className="break-words px-[16px] text-[24px] font-bold">
            {writing?.title}
          </h1>
          <div className="pt-[12px] text-[16px] text-[#9f9f9f]">
            <p>{formatDate(writing?.publishedAt || null)}に公開</p>
            {formatDate(writing?.publishedAt || null) ==
            formatDate(writing?.updatedAt || null) ? (
              <></>
            ) : (
              <p>{formatDate(writing?.updatedAt || null)}に更新</p>
            )}
          </div>
        </div>
        <div className="h-full flex-1">
          <MarkdownPreview content={writing?.content || ""} />
        </div>
      </div>
      <div className="py-[30px]">
        <GoodButton likes={writing?.likes || 0} id={writing?.id || ""} />
      </div>
      <div className="flex justify-center">
        <Copyright />
      </div>
    </>
  );
}
