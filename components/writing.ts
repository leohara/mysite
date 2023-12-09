import { cache } from "react";

import { prisma } from "@/app/lib/db/prisma";

export const getWritings = cache(async () => {
  return await prisma.writing.findMany({
    where: { published: true },
    cacheStrategy: { ttl: 60 * 5 },
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
  const result = await prisma.writing.findUnique({
    where: { postId: postId },
    cacheStrategy: { ttl: 60 * 5 },
  });
  if (!result) {
    return {
      id: "",
      title: "",
      postId: "",
      content: "",
      description: "",
      published: false,
      createdAt: new Date(),
      publishedAt: new Date(),
      updatedAt: new Date(),
      likes: 0,
    };
  }
  return result;
});
