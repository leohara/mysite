import "highlight.js/styles/atom-one-dark-reasonable.css";
import { markdownToHtml } from "./markdownToHtml";

export default function MarkdownPreview({ content }: { content: string }) {
  return (
    <div
      className="markdown"
      dangerouslySetInnerHTML={{ __html: markdownToHtml(content) }}
    />
  );
}
