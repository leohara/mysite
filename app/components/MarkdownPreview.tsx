import 'highlight.js/styles/atom-one-dark.css';
import rehypeKatex from "rehype-katex";
import remarkBreaks from "remark-breaks";
import remarkMath from "remark-math";
import { visit } from 'unist-util-visit';
import "highlight.js/styles/atom-one-dark-reasonable.css";
import { unified } from 'unified'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeHighlight from 'rehype-highlight'
import remarkCodeTitles from "remark-flexible-code-titles";

const MyCustomComponent = () => {
  // ここにカスタムコンポーネントのロジックを記述
  return <div>custom components</div>;
};

// toggle
// image
// link
const Comment = () => {
  return (tree: any) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'p' && node.children[0].type === 'text') {
        if (node.children[0].value.startsWith('[comment]')) {
          node.tagName = 'div';
          node.properties = {
            className: ['bg-[#cef]', 'rounded-[16px]', 'px-[16px]', 'py-[20px]', 'flex'],
          };
          node.children[0].value = node.children[0].value.replace(
            /\[\/?comment\]/g,
            ''
          );
          const value = node.children[0].value;
          node.children[0].value = '';

          const innerDiv = {
            type: 'element',
            tagName: 'span',
            properties: {
              className: ['rounded-[50%]', 'bg-[#3Ea8ff]', 'h-[22px]', 'w-[22px]', 'text-center', 'inline-block', 'mr-[12px]']
            },
            children: [{
              type: 'element',
              tagName: 'p',
              properties: {
                className: ['text-[#fff]', 'font-bold']
              },
              children: [{ type: 'text', value: '!' }]
            }]
          };

          const innerText = {
            type: 'element',
            tagName: 'p',
            properties: {
              className: ['flex-1']
            },
            children: [{ type: 'text', value: value }]
            }
          // 現在のノードに新しいdivを追加
          node.children.push(innerDiv);
          node.children.push(innerText);
        }
      }
    });
  };
};

const Alert = () => {
  return (tree: any) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'p' && node.children[0].type === 'text') {
        if (node.children[0].value.startsWith('[Alert]')) {
          node.tagName = 'div';
          node.properties = {
            className: ['bg-[#fdb]', 'rounded-[16px]', 'px-[16px]', 'py-[20px]', 'flex'],
          };
          node.children[0].value = node.children[0].value.replace(
            /\[\/?Alert\]/g,
            ''
          );
          const value = node.children[0].value;
          node.children[0].value = '';

          const innerDiv = {
            type: 'element',
            tagName: 'span',
            properties: {
              className: ['rounded-[50%]', 'bg-[#ff7670]', 'h-[22px]', 'w-[22px]', 'text-center', 'inline-block', 'mr-[12px]']
            },
            children: [{
              type: 'element',
              tagName: 'p',
              properties: {
                className: ['text-[#fff]', 'font-bold']
              },
              children: [{ type: 'text', value: '!' }]
            }]
          };

          const innerText = {
            type: 'element',
            tagName: 'p',
            properties: {
              className: ['flex-1']
            },
            children: [{ type: 'text', value: value }]
            }

          // 現在のノードに新しいdivを追加
          node.children.push(innerDiv);
          node.children.push(innerText);
        }
      }
    });
  };
};

// const customCode = () => {
//   return (tree: any) => {
//     visit(tree, 'element', (node, index, parent) => {
//       if (node.tagName === 'p') {
//         // 新しいトップレベルのdivを作成
//         const newDiv = {
//           type: 'element',
//           tagName: 'div',
//           properties: {
//             className: ['bg-[#cef]', 'rounded-[16px]', 'flex']
//           },
//           children: [
//             {
//               type: 'element',
//               tagName: 'span',
//               properties: {
//                 className: ['rounded-[50%]', 'bg-[#acf]', 'h-[22px]', 'w-[22px]', 'text-center']
//               },
//               children: [
//                 {
//                   type: 'element',
//                   tagName: 'p',
//                   properties: {
//                     className: ['text-[#fff]', 'font-bold']
//                   },
//                   children: [{ type: 'text', value: '!' }]
//                 }
//               ]
//             },
//             {
//               type: 'element',
//               tagName: 'p',
//               properties: {},
//               children: [{ type: 'text', value: node.children[0].value }]
//             }
//           ]
//         };

//         // 親要素に新しいdivを挿入
//         parent.children.splice(index, 1, newDiv);
//       }
//     });
//   };
// };


const markdownToHtml = (markdown: string) =>
unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkCodeTitles)
  .use(remarkMath)
  .use(remarkRehype, {
    allowDangerousHtml: true // trueにしておくことで、自分でカスタマイスしたタグをそのまま吐き出してくれるようになります。
  })
  .use(rehypeHighlight)
  .use(rehypeKatex)
  .use(rehypeStringify, {
    allowDangerousHtml: true
  })
  .use(Comment)
  .use(Alert)
  .processSync(markdown).value as string

export default function MarkdownPreview({ content }: { content: string }) {

  return (
    <div className="h-full flex-1 overflow-y-auto border-r-[0.5px] border-solid border-[#ccc] p-[20px] pb-[150px]">
      <div className="markdown" dangerouslySetInnerHTML={{ __html: markdownToHtml(content) }} />
      {/* {markdownToHtml(content)} */}
    </div>
  );
}
