"use client";

import { Writing } from "@prisma/client";
import Link from "next/link";
import { SessionProvider } from "next-auth/react";
import { toast } from "react-hot-toast";

import { deleteWriting } from "./components/actions";

import { formatDate } from "@/app/lib/formatDate";
import DateAt from "@/components/pageList/DateAt";
import Delete from "@/components/pageList/Delete";
import PostId from "@/components/pageList/PostId";

type WritingProps = {
  writings: Writing[];
};

export default function Container({ writings }: WritingProps) {
  const action = async (formData: FormData) => {
    const result = await deleteWriting(formData);
    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success("削除に成功しました");
    }
  };

  return (
    <SessionProvider>
      <div className="fixed h-full w-full overflow-auto pb-[100px]">
        <Link
          href={`/control-panel/new`}
          className="absolute right-[40px] top-[20px] z-10 h-[40px] w-[90px] rounded-[16px] bg-[#f17280] pt-[8px] text-center text-[#fff]"
        >
          新規
        </Link>
        <h3 className="pl-[12px] pt-[8px] text-[20px] font-bold">Draft</h3>
        <div className="px-[12px] pt-[40px]">
          <div className="flex">
            <div className="w-[40%] text-center">Title</div>
            <div className="w-[20%] text-center">URL</div>
            <div className="w-[15%] text-center">Updated</div>
            <div className="w-[15%] text-center">Published</div>
            <div className="w-[10%] text-center">delete</div>
          </div>
          <hr className="border-[1px] border-[#525252]" />
          <div className="">
            {writings
              .filter((writing) => !writing.published)
              .map((writing) => {
                return (
                  <div
                    key={writing.title}
                    className="w-full gap-[20px] py-[15px]"
                  >
                    <div className="top-[50%] flex">
                      <Link
                        className="w-[40%] px-[2px] text-[#1f1e33]"
                        href={`/control-panel/edit/${writing.postId}`}
                      >
                        {writing.title}
                      </Link>
                      <div className="w-[20%] px-[2px]">
                        <PostId
                          postId={writing.postId}
                          published={writing.published}
                        />
                      </div>
                      <div className="w-[15%] px-[2px] text-center">
                        <DateAt date={formatDate(writing.updatedAt)} />
                      </div>
                      <div className="w-[15%] px-[2px] text-center">
                        <DateAt date={formatDate(writing.publishedAt)} />
                      </div>
                      <Delete>
                        <form className="w-[10%]" action={action}>
                          <button
                            type="submit"
                            value={writing.id}
                            name="delete"
                            className="ml-[10px] h-[25px] w-[60px] rounded-[16px] bg-[#bd0302] text-center text-[14px] text-[#fff]"
                          >
                            delete
                          </button>
                        </form>
                      </Delete>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <hr className="m-[12px] border-[1px]" />

        <h3 className="pl-[12px] pt-[8px] text-[20px] font-bold">Published</h3>
        <div className="px-[12px] pt-[40px]">
          <div className="flex">
            <div className="w-[40%] text-center">Title</div>
            <div className="w-[20%] text-center">URL</div>
            <div className="w-[15%] text-center">Updated</div>
            <div className="w-[15%] text-center">Published</div>
            <div className="w-[10%] text-center">delete</div>
          </div>
          <hr className="border-[1px] border-[#525252]" />
          <div className="">
            {writings
              .filter((writing) => writing.published)
              .map((writing) => {
                return (
                  <div
                    key={writing.title}
                    className="w-full gap-[20px] py-[15px]"
                  >
                    <div className="top-[50%] flex">
                      <Link
                        className="w-[40%] px-[2px] text-[#1f1e33]"
                        href={`/control-panel/edit/${writing.postId}`}
                      >
                        {writing.title}
                      </Link>
                      <div className="w-[20%] px-[2px]">
                        <PostId
                          postId={writing.postId}
                          published={writing.published}
                        />
                      </div>
                      <div className="w-[15%] px-[2px] text-center">
                        <DateAt date={formatDate(writing.updatedAt)} />
                      </div>
                      <div className="w-[15%] px-[2px] text-center">
                        <DateAt date={formatDate(writing.publishedAt)} />
                      </div>
                      <Delete>
                        <form className="w-[10%]" action={action}>
                          <button
                            type="submit"
                            value={writing.id}
                            name="delete"
                            className="ml-[10px] h-[25px] w-[60px] rounded-[16px] bg-[#bd0302] text-center text-[14px] text-[#fff]"
                          >
                            delete
                          </button>
                        </form>
                      </Delete>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </SessionProvider>
  );
}
