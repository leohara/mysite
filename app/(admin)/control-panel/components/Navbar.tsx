"use client";

import { EditContext } from "@/app/context/EditContext";
import { useContext } from "react";
import PublishSlider from "../../../components/publishSlider/PublishSlider";

type EditContextType = {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  link: string;
  setLink: React.Dispatch<React.SetStateAction<string>>;
  isPublished: boolean;
  setIsPublished: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Navbar() {
  const { title, setTitle, link, setLink, isPublished, setIsPublished } =
    useContext<EditContextType>(EditContext);

  return (
    <div className="fixed h-[150px] w-full bg-[#f3f4f5]">
      <div className="flex h-full flex-col gap-[10px] p-[20px]">
        <div className="flex">
          <input
            className="h-[24px] flex-1 rounded-[10px] border-none pl-[8px] text-[24px] placeholder:text-[20px] focus:border-[2px] focus:border-solid focus:border-[#fff] focus:outline-none"
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex">
          <input
            className="h-[24px] flex-1 rounded-[6px] border-none pl-[8px] text-[24px] focus:border-[2px] focus:border-solid focus:border-[#fff] focus:outline-none"
            type="text"
            name="link"
            placeholder="Permanent Link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <PublishSlider isDraft={isPublished} setIsDraft={setIsPublished} />
        </div>
        <div className="flex h-[24px] flex-1">
          <input
            className="h-[24px] flex-1 rounded-[6px] border-none pl-[8px] text-[16px] focus:border-[2px] focus:border-solid  focus:border-[#fff] focus:outline-none"
            type="text"
            placeholder="Tag"
          />
          <button
            type="submit"
            className="ml-[15px] mt-[-2px] h-[28px] w-[56px] cursor-pointer rounded-[10px] bg-[#3ea8ff] text-center text-[16px] leading-[28px]"
          >
            保存
          </button>
        </div>
      </div>
    </div>
  );
}
