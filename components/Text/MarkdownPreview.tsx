import "highlight.js/styles/atom-one-dark-reasonable.css";
import { markdownToHtml } from "./MarkdownToHtmlTest";

export default function MarkdownPreview({ content }: { content: string }) {
  return <>{markdownToHtml(content)}</>;
}
