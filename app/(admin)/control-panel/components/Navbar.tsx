"use client";

import { useEffect, useContext } from "react";
import { useRouter, usePathname } from "next/navigation";

import { Beforeunload } from 'react-beforeunload';

import { AiOutlineArrowLeft } from "react-icons/ai";

import PublishSlider from "@/app/components/publishSlider/PublishSlider";
import { EditContextType, EditContext } from "@/app/context/EditContext";

export default function Navbar() {
  const { title, setTitle, link, setLink, isPublished, setIsPublished } =
    useContext<EditContextType>(EditContext);

    const router = useRouter();
    const pathname = usePathname();
    console.log(pathname);

    useEffect(() => {
      const backHandler = () => {
        if (confirm('行った変更が保存されているかを確認してから操作を行ってください。\n本当にこのページから離れてもよろしいですか？')) {
          return;
        }
        router.replace(pathname);
      };
  
      window.addEventListener('popstate', backHandler, false);
  
      return () => {
        window.removeEventListener('popstate', backHandler);
      };
    }, []);

  return (
    <Beforeunload onBeforeunload={() => ""} >
    <div className="fixed h-[110px] w-full bg-[#f3f4f5]">
      <div className="flex h-full flex-col gap-[10px] p-[20px]">
        <div className="flex">
          <button
            className="mt-[4px] h-[28px] w-[30px] cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              if (confirm('行った変更が保存されているかを確認してから操作を行ってください。\n本当にこのページから離れてもよろしいですか？')) {
                router.replace('/control-panel/');
              }
            }}
          >
            <AiOutlineArrowLeft size={22} color={"#808080"} />
          </button>
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
    </Beforeunload>
  );
}
