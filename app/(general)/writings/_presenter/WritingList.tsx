import WritingCard from "./WritingCard";

import { getWritings } from "@/app/lib/writing";

export default async function WritingList() {
  const publishedWritings = await getWritings();

  return (
    <div className=" pt-[64px]">
      <div className="flex-col px-[24px]">
        {publishedWritings.map((writing) => (
          <WritingCard writing={writing} key={writing.id} />
        ))}
      </div>
    </div>
  );
}
