import "highlight.js/styles/atom-one-dark-reasonable.css";
import { markdownToHtml } from "./MarkdownToHtmlTest";

export function MarkdownPreview({ content }: { content: string }) {
  return <>{markdownToHtml(content)}</>;
}
