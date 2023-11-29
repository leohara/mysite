import { cache } from "react";

import { prisma } from "@/app/lib/db/prisma";

export const getWritings = cache(async () => {
  return await prisma.writing.findMany({
    where: { published: true },
    orderBy: { updatedAt: "desc" },
    select: {
      id: true,
      postId: true,
      title: true,
      published: true,
      updatedAt: true,
    },
  });
});

export const getWriting = cache(async (postId: string) => {
  return await prisma.writing.findUnique({
    where: { postId: postId },
  });
});