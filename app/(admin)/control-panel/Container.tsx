"use client";

import { Writing } from "@prisma/client";
import Link from "next/link";
import { SessionProvider } from "next-auth/react";
import { toast } from "react-hot-toast";
import { MdOutlineEdit } from "react-icons/md";

import { deleteWriting } from "./components/actions";

import { formatDate } from "@/app/lib/formatDate";
import DateAt from "@/components/pageList/DateAt";
import Delete from "@/components/pageList/Delete";
import PostId from "@/components/pageList/PostId";
import Status from "@/components/pageList/Status";

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
      <div className="fixed">
        <div className="h-[60px] w-screen bg-[#3ea8ff] pl-[80px] pt-[15px] text-[#fff]">
          <div className="flex gap-[30px]">
            <div className="w-[400px] pl-[4px]">Title</div>
            <div className="w-[200px] pl-[4px]">URL</div>
            <div className="w-[75px] pl-[4px]">Status</div>
            <div className="w-[90px] pl-[4px]">Updated</div>
            <div className="w-[90px] pl-[4px]">Published</div>
            <div className="w-[80px] text-center">Edit</div>
            <div className="w-[80px] text-center">delete</div>
          </div>
        </div>
        <div className="h-[calc(100vh-60px)] overflow-y-auto pb-[150px]">
          {writings.map((writing) => {
            return (
              <div
                key={writing.title}
                className="h-[80px] w-screen border-b-[1px] border-solid py-[15px] pl-[80px]"
              >
                <div className="top-[50%] flex gap-[30px]">
                  {/* タイトル部分 */}
                  <div className="w-[400px] ">
                    <div className="line-clamp-2">{writing.title}</div>
                  </div>
                  <PostId
                    postId={writing.postId}
                    published={writing.published}
                  />
                  <Status isPublished={writing.published} />
                  <DateAt date={formatDate(writing.updatedAt)} />
                  <DateAt date={formatDate(writing.publishedAt)} />
                  <Link
                    href={`/control-panel/edit/${writing.postId}`}
                    className="w-[80px]"
                  >
                    <div className="ml-[20px] h-[40px] w-[40px] rounded-[50%] border-[1px] border-[#9f9f9f] pl-[4px] pt-[3px]">
                      <MdOutlineEdit size={30} />
                    </div>
                  </Link>
                  <Delete>
                    <form className="w-[80px]" action={action}>
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
      <Link
        href={`/control-panel/new`}
        className="fixed right-[40px] top-[40px] z-10 h-[40px] w-[90px] rounded-[16px] bg-[#f17280] pt-[8px] text-center text-[#fff]"
      >
        新規
      </Link>
    </SessionProvider>
  );
}
