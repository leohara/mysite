"use client";

import React, { useState } from "react";
import { Writing } from "@prisma/client";
import { editWriting } from "@/app/(admin)/control-panel/actions";
import { EditContext } from "@/app/context/EditContext";
import { TextContext } from "@/app/context/TextContext";
import Navbar from "./Navbar";
import Preview from "./Preview";
import Editor from "./Editor";

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
    await editWriting(formData, postId);
  };

  return (
    <TextContext.Provider value={{ markdown, setMarkdown }}>
      <EditContext.Provider
        value={{ title, setTitle, link, setLink, isPublished, setIsPublished }}
      >
        <form action={action}>
          <Navbar />
          <div className="fixed inset-x-0 top-[150px] h-[full]">
            <div className="flex h-[calc(100vh-150px)]">
              <Preview />
              <Editor />
            </div>
          </div>
        </form>
      </EditContext.Provider>
    </TextContext.Provider>
  );
}
