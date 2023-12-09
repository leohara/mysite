import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";
import remarkDirective from "remark-directive";
import remarkGfm from "remark-gfm";

import "highlight.js/styles/atom-one-dark-reasonable.css";
import { CodeBlock } from "./CodeBlock";
import { CustomImage } from "./CustomImage";
import { CustomLink } from "./CustomLink";
import { remarkAlert } from "./remarkAlert";
import { remarkCheck } from "./remarkCheck";
import { remarkInfo } from "./remarkInfo";

// ブログカードの実装
// 従来のuseをみる

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
      ]}
      rehypePlugins={[[rehypeHighlight, { ignoreMissing: true }], rehypeRaw]}
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
