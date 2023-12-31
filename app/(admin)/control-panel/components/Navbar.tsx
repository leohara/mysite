"use client";

import { useContext, useEffect } from "react";

import { usePathname, useRouter } from "next/navigation";
import { Beforeunload } from "react-beforeunload";
import { AiOutlineArrowLeft } from "react-icons/ai";

import { EditContext, EditContextType } from "@/app/context/EditContext";
import PublishSlider from "@/components/publishSlider/PublishSlider";

export default function Navbar() {
  const {
    title,
    setTitle,
    link,
    setLink,
    isPublished,
    setIsPublished,
    description,
    setDescription,
  } = useContext<EditContextType>(EditContext);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const backHandler = () => {
      if (
        confirm(
          "行った変更が保存されているかを確認してから操作を行ってください。\n本当にこのページから離れてもよろしいですか？",
        )
      ) {
        return;
      }
      router.replace(pathname);
    };

    window.addEventListener("popstate", backHandler, false);

    return () => {
      window.removeEventListener("popstate", backHandler);
    };
  }, [pathname, router]);

  return (
    <Beforeunload onBeforeunload={() => ""}>
      <div className="fixed h-[240px] w-[50%] border-b-[0.5px] border-r-[0.5px] border-solid border-[#ccc] bg-[#f3f4f5]">
        <div className="flex h-full flex-col gap-[10px] p-[20px]">
          <div className="flex">
            <button
              className="mt-[4px] h-[28px] w-[30px] cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                if (
                  confirm(
                    "行った変更が保存されているかを確認してから操作を行ってください。\n本当にこのページから離れてもよろしいですか？",
                  )
                ) {
                  router.replace("/control-panel/");
                }
              }}
            >
              <AiOutlineArrowLeft size={22} color={"#808080"} />
            </button>
            <p className="w-[60px] pr-[12px] pt-[2px] text-[20px]">Title</p>
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
            <p className="w-[60px] pr-[12px] pt-[2px] text-[20px]">Link</p>
            <input
              className="h-[32px] flex-1 rounded-[6px] border-none pl-[8px] text-[20px] focus:border-[2px] focus:border-solid focus:border-[#fff] focus:outline-none"
              type="text"
              name="link"
              placeholder="Permanent Link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
            <div className="mt-[3px]">
              <PublishSlider
                isDraft={isPublished}
                setIsDraft={setIsPublished}
              />
            </div>
          </div>
          {/* // TODO: タグの実装 */}
          <div className="flex">
            <p className="w-[60px] pr-[12px] pt-[2px] text-[20px]">Tags</p>
          </div>

          <div className="p-[8px]">
            <textarea
              className="h-[80px] w-full resize-none rounded-[10px] border-[1px] border-gray-200 p-[8px] text-[16px] outline-none"
              name="description"
              placeholder="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <p className="absolute bottom-3 right-10">{`(${description.length} words)`}</p>
          </div>
        </div>
      </div>
    </Beforeunload>
  );
}
