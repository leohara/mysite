"use client";

import { useState } from "react";
import { addWriting } from "@/app/(admin)/control-panel/components/actions";
import { EditContext } from "@/app/context/EditContext";
import { TextContext } from "@/app/context/TextContext";
import Editor from "@/app/(admin)/control-panel/components/Editor";
import Navbar from "@/app/(admin)/control-panel/components/Navbar";
import Preview from "@/app/(admin)/control-panel/components/Preview";

export default function Container() {
  const [title, setTitle] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [isPublished, setIsPublished] = useState<boolean>(false);
  const [markdown, setMarkdown] = useState<string>("");

  const action = async (formData: FormData) => {
    await addWriting(formData);
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
