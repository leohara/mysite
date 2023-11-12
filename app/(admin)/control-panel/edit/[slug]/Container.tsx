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
import Navbar from "./Navbar";

type WritingProps = {
  writing: Writing;
};

export default function Container({ writing }: WritingProps) {
  // const [postIds, setPostIds] = useState<string>(writing.id);
  const [title, setTitle] = useState<string>(writing.title);
  const [link, setLink] = useState<string>(writing.postId);
  const [isDraft, setIsDraft] = useState<boolean>(writing.published);
  const [markdown, setMarkdown] = useState<string>(writing.content);

  return (
    <TextContext.Provider value={{ markdown, setMarkdown }}>
      <EditContext.Provider
        value={{ title, setTitle, link, setLink, isDraft, setIsDraft }}
      >
        <Navbar />
      </EditContext.Provider>
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
              onChange={(e) => setMarkdown(e.target.value)}
            />
          </div>
        </div>
      </div>
    </TextContext.Provider>
  );
}
