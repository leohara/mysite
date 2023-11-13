"use client";

import { EditContext } from "@/app/context/EditContext";
import { TextContext } from "@/app/context/TextContext";
import { Writing } from "@prisma/client";
import "katex/dist/katex.min.css";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeKatex from "rehype-katex";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import PublishSlider from "../../../../components/publishSlider/PublishSlider";
import { editWriting } from "@/app/(admin)/control-panel/actions";
// import Navbar from "./Navbar";

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
                <PublishSlider
                  isDraft={isPublished}
                  setIsDraft={setIsPublished}
                />
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
          <div className="fixed inset-x-0 top-[150px] h-[full]">
            <div className="flex h-[calc(100vh-150px)]">
              <div className="h-full flex-1 border-r-[0.5px] border-solid border-[#ccc] p-[20px]">
                <ReactMarkdown
                  components={{
                    code(props) {
                      const { children, className, ...rest } = props;
                      const match = /language-(\w+)/.exec(className || "");
                      return match ? (
                        <SyntaxHighlighter
                          {...rest}
                          style={vscDarkPlus}
                          language={match[1]}
                          PreTag="div"
                          ref={React.createRef<SyntaxHighlighter>()}
                        >
                          {String(children).replace(/\n$/, "")}
                        </SyntaxHighlighter>
                      ) : (
                        <code {...rest} className={className}>
                          {children}
                        </code>
                      );
                    },
                  }}
                  remarkPlugins={[remarkGfm, remarkMath, remarkBreaks]}
                  rehypePlugins={[rehypeKatex]}
                  className="markdown"
                >
                  {markdown}
                </ReactMarkdown>
              </div>
              <div className="h-full flex-1 p-[20px]">
                <textarea
                  className="h-full w-full resize-none border-none text-[16px] outline-none"
                  placeholder="write your post here ..."
                  value={markdown}
                  name="markdown"
                  onChange={(e) => setMarkdown(e.target.value)}
                />
              </div>
            </div>
          </div>
        </form>
      </EditContext.Provider>
    </TextContext.Provider>
  );
}
