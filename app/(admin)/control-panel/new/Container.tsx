"use client";

import { useState } from "react";

import { toast } from "react-hot-toast";

import Navbar from "@/app/(admin)/control-panel/components/Navbar";
import { addWriting } from "@/app/(admin)/control-panel/components/actions";
import { DescriptionContext } from "@/app/context/DescriptionContext";
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
        value={{ title, setTitle, link, setLink, isPublished, setIsPublished }}
      >
        <DescriptionContext.Provider value={{ description, setDescription }}>
          <form action={action}>
            <Navbar />
            <div className="fixed inset-x-0 top-[110px] h-[full]">
              <div className="flex h-[calc(100vh-110px)]">
                <div className="h-full flex-1 overflow-y-auto border-r-[0.5px] border-solid border-[#ccc] p-[20px] pb-[150px]">
                  <MarkdownPreview content={markdown} />
                </div>
                <div className="h-full flex-1">
                  <div className="relative p-[8px]">
                    <textarea
                      className="h-[80px] w-full resize-none rounded-[10px] border-[1px] border-gray-200 text-[16px] outline-none"
                      name="description"
                      placeholder="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                    <p className="absolute bottom-3 right-7">{`( ${description.length} 字 )`}</p>
                  </div>
                  <div className="h-[calc(100%-100px)]">
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
            </div>
          </form>
        </DescriptionContext.Provider>
      </EditContext.Provider>
    </TextContext.Provider>
  );
}
