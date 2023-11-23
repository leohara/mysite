"use client";

import { useContext } from "react";

import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

import PublishSlider from "@/app/components/publishSlider/PublishSlider";
import { EditContextType, EditContext } from "@/app/context/EditContext";

// todo: 一覧に戻るときに、編集中の内容を保存するかどうかの確認をする

export default function Navbar() {
  const { title, setTitle, link, setLink, isPublished, setIsPublished } =
    useContext<EditContextType>(EditContext);

  return (
    <div className="fixed h-[110px] w-full bg-[#f3f4f5]">
      <div className="flex h-full flex-col gap-[10px] p-[20px]">
        <div className="flex">
          <Link
            href="/control-panel"
            className="mt-[4px] h-[28px] w-[30px] cursor-pointer"
          >
            <AiOutlineArrowLeft size={22} color={"#808080"} />
          </Link>
          <input
            className="h-[32px] flex-1 rounded-[6px] border-none pl-[8px] text-[20px] focus:border-[2px] focus:border-solid focus:border-[#fff] focus:outline-none"
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            type="submit"
            className="ml-[15px] mt-[2px] h-[28px] w-[56px] cursor-pointer rounded-[10px] bg-[#3ea8ff] text-center text-[16px] leading-[28px]"
          >
            保存
          </button>
        </div>
        <div className="flex pl-[30px]">
          <input
            className="h-[32px] flex-1 rounded-[6px] border-none pl-[8px] text-[20px] focus:border-[2px] focus:border-solid focus:border-[#fff] focus:outline-none"
            type="text"
            name="link"
            placeholder="Permanent Link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <div className="mt-[3px]">
            <PublishSlider isDraft={isPublished} setIsDraft={setIsPublished} />
          </div>
        </div>
      </div>
    </div>
  );
}
