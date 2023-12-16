import { prisma } from "@/app/lib/db/prisma";

export const getWritings = async () => {
  const result = await prisma.writing.findMany({
    where: { published: true },
    cacheStrategy: { ttl: 60 },
    orderBy: { publishedAt: "desc" },
    select: {
      id: true,
      postId: true,
      title: true,
      published: true,
      publishedAt: true,
    },
  });
  return result;
};

export const getWriting = async (postId: string) => {
  const result = await prisma.writing.findUnique({
    where: { postId: postId },
    cacheStrategy: { ttl: 60 },
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
};
