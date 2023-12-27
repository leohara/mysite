"use client";

import { useState } from "react";

import { toast } from "react-hot-toast";

import Navbar from "@/app/(admin)/control-panel/components/Navbar";
import { addWriting } from "@/app/(admin)/control-panel/components/actions";
import { EditContext } from "@/app/context/EditContext";
import { TextContext } from "@/app/context/TextContext";
import { MarkdownPreview } from "@/components/Text/MarkdownPreview";

export default function Container() {
  const [title, setTitle] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [isPublished, setIsPublished] = useState<boolean>(false);
  const [markdown, setMarkdown] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const action = async (formData: FormData) => {
    const result = await addWriting(formData);
    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success("追加しました");
    }
  };

  return (
    <TextContext.Provider value={{ markdown, setMarkdown }}>
      <EditContext.Provider
        value={{
          title,
          setTitle,
          link,
          setLink,
          isPublished,
          setIsPublished,
          description,
          setDescription,
        }}
      >
        <form action={action}>
          <div className="fixed inset-x-0 flex h-full">
            <div className="w-[50%] border-r-[0.5px] border-solid border-[#ccc]">
              <Navbar />
              <div className="relative top-[240px] h-full flex-1">
                <div className="">
                  <textarea
                    className="h-full w-full resize-none border-none px-[20px] pb-[150px] pt-[20px] text-[16px] outline-none"
                    placeholder="write your post here ..."
                    value={markdown}
                    name="markdown"
                    onChange={(e) => setMarkdown(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="h-full flex-1 overflow-y-auto p-[20px] pb-[150px]">
              <MarkdownPreview content={markdown} />
            </div>
          </div>
        </form>
      </EditContext.Provider>
    </TextContext.Provider>
  );
}
