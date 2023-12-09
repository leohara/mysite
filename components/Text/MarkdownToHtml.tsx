import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";
import remarkDirective from "remark-directive";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

import { CodeBlock } from "./CodeBlock";
import { CustomImage } from "./CustomImage";
import { CustomLink } from "./CustomLink";
import { remarkAlert } from "./remarkAlert";
import { remarkCheck } from "./remarkCheck";
import { remarkInfo } from "./remarkInfo";

export function markdownToHtml(markdown: string) {
  const convertResult = (
    <ReactMarkdown
      className="markdown mx-auto max-w-2xl text-lg leading-loose"
      remarkPlugins={[
        remarkGfm,
        remarkBreaks,
        remarkDirective,
        remarkInfo,
        remarkCheck,
        remarkAlert,
        remarkMath,
      ]}
      rehypePlugins={[
        [rehypeHighlight, { ignoreMissing: true }],
        rehypeRaw,
        rehypeKatex,
      ]}
      components={{
        h1: "h2",
        h2: "h3",
        h3: "h4",
        h4: "h5",
        h5: "h6",
        a: CustomLink,
        img: CustomImage,
        code: CodeBlock,
      }}
    >
      {markdown}
    </ReactMarkdown>
  );

  return <div>{convertResult}</div>;
}
