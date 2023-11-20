import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkCodeTitles from "remark-flexible-code-titles";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";
import { Check, Comment, Alert } from "./custom";

export const markdownToHtml = (markdown: string) => {
  return unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkCodeTitles)
    .use(remarkMath)
    .use(remarkRehype, {
      allowDangerousHtml: true,
    })
    .use(rehypeHighlight)
    .use(rehypeKatex)
    .use(rehypeStringify, {
      allowDangerousHtml: true,
    })
    .use(Comment)
    .use(Check)
    .use(Alert)
    .processSync(markdown).value as string;
};
