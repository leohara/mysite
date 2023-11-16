import React, { Ref } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeKatex from "rehype-katex";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

type CodeProps = {
  className?: string;
  children?: React.ReactNode;
  node: any;
};

const CodeBlock = React.forwardRef<HTMLDivElement, CodeProps>((props, ref) => {
  const { children, className, node, ...rest } = props;
  const match = /language-(\w+)/.exec(className || "");
  const title = node?.data?.meta
    ?.split(" ")[0]
    ?.split("=")[1]
    ?.replace(/"/g, "");
  return (
    <div className="inline">
      {title && (
        <div className="inline h-[15px] border-[1px] border-x-[0px] border-t-[0px] border-b-[#1e1e1e] px-[16px] text-[15px] text-[#1e1e1e]">
          {title}
        </div>
      )}
      {match ? (
        <SyntaxHighlighter
          {...rest}
          style={vscDarkPlus}
          language={match[1]}
          PreTag="div"
          ref={ref as Ref<SyntaxHighlighter>}
          className={`
        ${"rounded-[12px]"}
        `}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code {...rest} className="rounded-[16px]">
          {children}
        </code>
      )}
    </div>
  );
});
CodeBlock.displayName = "CodeBlock";

export default function Markdown({ content }: { content: string }) {
  return (
    <div className="h-full flex-1 overflow-y-auto pb-[150px]">
      <ReactMarkdown
        components={{
          code: CodeBlock as any,
          pre: ({ children }) => <pre className="">{children}</pre>,
        }}
        remarkPlugins={[remarkGfm, remarkMath, remarkBreaks]}
        rehypePlugins={[rehypeKatex]}
        className="markdown"
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
