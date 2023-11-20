import 'highlight.js/styles/atom-one-dark.css';
import rehypeKatex from "rehype-katex";
import remarkBreaks from "remark-breaks";
import remarkMath from "remark-math";
import { visit } from 'unist-util-visit';

import { unified } from 'unified'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeHighlight from 'rehype-highlight'

const MyCustomComponent = () => {
  // ここにカスタムコンポーネントのロジックを記述
  return <div>custom components</div>;
};

const customCodeBlock = () => {
  return (tree: any) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'p' && node.children[0].type === 'text') {
        if (node.children[0].value.startsWith('[comment]')) {
          node.tagName = 'div';
          node.properties = {
            className: ['alert'],
          };
          node.children[0].value = node.children[0].value.replace(
            /\[\/?comment\]/g,
            ''
          );
        }
      }
    });
  };
};

const markdownToHtml = (markdown: string) =>
unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkBreaks)
  .use(remarkMath)
  .use(remarkRehype, {
    allowDangerousHtml: true // trueにしておくことで、自分でカスタマイスしたタグをそのまま吐き出してくれるようになります。
  })
  .use(rehypeHighlight)
  .use(rehypeKatex)
  .use(rehypeStringify, {
    allowDangerousHtml: true
  })
  // .use(customCode)
  .processSync(markdown).value as string

export default function MarkdownPreview({ content }: { content: string }) {

  return (
    <div className="h-full flex-1 overflow-y-auto border-r-[0.5px] border-solid border-[#ccc] p-[20px] pb-[150px]">
      <div className="markdown" dangerouslySetInnerHTML={{ __html: markdownToHtml(content) }} />
      {/* {markdownToHtml(content)} */}
    </div>
  );
}
