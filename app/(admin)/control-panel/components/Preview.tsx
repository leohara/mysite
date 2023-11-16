import MarkdownPreview from "@/app/components/MarkdownPreview";
import { TextContext } from "@/app/context/TextContext";
import { useContext } from "react";

export default function Preview() {
  const { markdown } = useContext(TextContext);

  return <MarkdownPreview content={markdown} />;
}
