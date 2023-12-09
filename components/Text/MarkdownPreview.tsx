import "highlight.js/styles/atom-one-dark-reasonable.css";
import { markdownToHtml } from "./MarkdownToHtml";

export function MarkdownPreview({ content }: { content: string }) {
  return <>{markdownToHtml(content)}</>;
}
