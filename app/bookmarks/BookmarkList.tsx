"use client";

import { useState, useEffect } from "react";
import Header from "@/app/components/Header";
import Loading from "@/app/components/loading/Loading";

type Bookmark = {
  id: string;
  title: string;
  url: string;
  bookmarkId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export default function BookmarkList() {
  const [hasScrolled] = useState(false);
  const [data, setData] = useState<Bookmark[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const endpoint = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:3000/api/bookmark' 
  : 'https://beatleos.com/api/bookmark';
  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="fixed h-screen w-[320px] overflow-y-auto border-r-[0.5px] border-[#eeeff2] bg-[#fff] pb-[24px] text-[#404040]">
      <Header title={"Bookmarks"} hasScrolled={hasScrolled} isSide={false} />
      <div className="pt-[80px]">
        <div className="flex-col px-[24px]">
          {isLoading ? (
            <Loading />
          ) : (
            data.map((post: Bookmark) => (
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
