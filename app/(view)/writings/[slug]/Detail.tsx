import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeKatex from "rehype-katex";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

export default function Detail({ content }: { content: string }) {
  return (
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
      {content}
    </ReactMarkdown>
  );
}
