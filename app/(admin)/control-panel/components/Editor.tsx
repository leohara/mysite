import { useContext } from "react";
import { TextContext } from "@/app/context/TextContext";

export default function Editor() {
  const { markdown, setMarkdown } = useContext(TextContext);

  return (
    <div className="h-full flex-1 p-[20px]">
      <textarea
        className="h-full w-full resize-none border-none pb-[150px] text-[16px] outline-none"
        placeholder="write your post here ..."
        value={markdown}
        name="markdown"
        onChange={(e) => setMarkdown(e.target.value)}
      />
    </div>
  );
}
