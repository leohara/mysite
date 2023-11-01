"use client";

import { useState, useEffect } from "react";
import Header from "@/app/components/Header";
import Loading from "@/app/components/loading/Loading";

type Post = {
  id: string;
  title: string;
  postId: string;
  content: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
};

export default function WritingList() {
  const [hasScrolled] = useState(false);
  const [data, setData] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const endpoint =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/writings/"
      : "https://beatleos.com/api/writings/";

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }, [endpoint]);

  return (
    <div className="fixed h-screen w-[320px] overflow-y-auto border-r-[0.5px] border-[#eeeff2] bg-[#fff] pb-[24px] text-[#404040]">
      <Header title={"Writings"} hasScrolled={hasScrolled} isSide={false} />
      <div className="pt-[80px]">
        <div className="flex-col px-[24px]">
          {isLoading ? (
            <Loading />
          ) : (
            data.map((post: Post) => (
              <div key={post.id} className="mb-[8px] flex-col">
                <p className="text-[14px] font-bold">{post.title}</p>
                <p className="text-[14px]">{post.content}</p>
                <p className="text-[12px] text-[#9f9f9f]">{post.updatedAt}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
