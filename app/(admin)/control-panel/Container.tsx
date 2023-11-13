"use client";

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
  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  return (
    <div className="fixed">
      <div className="flex h-[60px] w-screen bg-[#f79945] pl-[80px] pt-[15px] text-[#fff]">
        <div className="w-[400px]">Title</div>
        <div className="w-[150px]">URL</div>
        <div className="w-[80px]">type</div>
        <div className="w-[300px]">Status</div>
        <div className="w-[100px]">Updated</div>
        <div className="w-[100px]">edit</div>
        <div className="w-[100px]">delete</div>
      </div>
      <div className="h-[calc(100vh-60px)] overflow-y-auto">
        {writings.map((writing) => {
          return (
            <div
              key={writing.title}
              className="flex h-[60px] w-screen pl-[80px] pt-[15px]"
            >
              <div className="top-[50%] flex gap-[20px]">
                <div className="">
                  {writing.published ? "Published" : "Draft"}
                </div>
                <div className="">{writing.title}</div>
                <div className="">{formatDate(writing.createdAt)}</div>
                <div className="">{formatDate(writing.updatedAt)}</div>
                <div className="">{writing.content}</div>
                <Link
                  href={`/control-panel/edit/${writing.postId}`}
                  className="bg-[aquamarine]"
                >
                  編集する
                </Link>
                <Link href={`/control-panel/new`} className="bg-[aquamarine]">
                  new
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
