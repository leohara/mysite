"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import { editWriting } from "@/app/(admin)/control-panel/components/actions";
import { EditContext } from "@/app/context/EditContext";
import { TextContext } from "@/app/context/TextContext";
import { Writing } from "@prisma/client";
import Editor from "../../components/Editor";
import Navbar from "../../components/Navbar";
import Preview from "../../components/Preview";

type WritingProps = {
  writing: Writing;
};

export default function Container({ writing }: WritingProps) {
  const [postId] = useState<string>(writing.id);
  const [title, setTitle] = useState<string>(writing.title);
  const [link, setLink] = useState<string>(writing.postId);
  const [isPublished, setIsPublished] = useState<boolean>(writing.published);
  const [markdown, setMarkdown] = useState<string>(writing.content);

  const action = async (formData: FormData) => {
    const result = await editWriting(formData, postId);
    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success("更新しました");
    }
  };

  return (
    <TextContext.Provider value={{ markdown, setMarkdown }}>
      <EditContext.Provider
        value={{ title, setTitle, link, setLink, isPublished, setIsPublished }}
      >
        <form action={action}>
          <Navbar />
          <div className="fixed inset-x-0 top-[110px] h-[full]">
            <div className="flex h-[calc(100vh-110px)]">
              <Preview />
              <Editor />
            </div>
          </div>
        </form>
      </EditContext.Provider>
    </TextContext.Provider>
  );
}
