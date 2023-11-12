"use client";

import React, { useState } from "react";
import { EditContext } from "@/app/provider/EditContext";
import { TextContext } from "@/app/provider/TextContext";
import { Writing } from "@prisma/client";
import Navbar from "./Navbar";
import styles from "./container.module.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkBreaks from "remark-breaks";
import 'katex/dist/katex.min.css';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

type WritingProps = {
  writing: Writing;
};

export default function Container({ writing }: WritingProps ) {

  const [postIds, setPostIds] = useState<string>(writing.id);
  const [title, setTitle] = useState<string>(writing.title);
  const [link, setLink] = useState<string>(writing.postId);
  const [isDraft, setIsDraft] = useState<boolean>(writing.published);
  const [markdown, setMarkdown] = useState<string>(
    writing.content,
  );

  return (
    <TextContext.Provider value={{ markdown, setMarkdown }}>
      <EditContext.Provider
        value={{ title, setTitle, link, setLink, isDraft, setIsDraft }}
      >
        <Navbar />
      </EditContext.Provider>
      <div className={styles.postContainer}>
        <div className={styles.wrapper}>
          <div className={styles.previewContainer}>
            <ReactMarkdown         components={{
          code(props) {
            const { children, className, node, ...rest } = props
            const match = /language-(\w+)/.exec(className || '')
            return match ? (
              <SyntaxHighlighter
                {...rest}
                style={ vscDarkPlus }
                language={match[1]}
                PreTag="div"
                ref={React.createRef<SyntaxHighlighter>()}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            )
          }
        }} remarkPlugins={[remarkGfm, remarkMath, remarkBreaks]} rehypePlugins={[rehypeKatex]} className="markdown">
              {markdown}
            </ReactMarkdown>
          </div>
          <div className={styles.editContainer}>
            <textarea
              className={styles.textarea}
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
