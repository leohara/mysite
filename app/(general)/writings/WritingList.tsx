import WritingCard from "./WritingCard";

import { prisma } from "@/app/lib/db/prisma";

export default async function WritingList() {
  const writings = await prisma.writing.findMany({
    orderBy: { updatedAt: "desc" },
  });

  return (
    <div className=" pt-[64px]">
      <div className="flex-col px-[24px]">
        {writings.map((writing) => (
          <WritingCard writing={writing} key={writing.id} />
        ))}
      </div>
    </div>
  );
}
