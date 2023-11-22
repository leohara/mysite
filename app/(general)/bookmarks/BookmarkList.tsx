import Container from "./Container";

import { prisma } from "@/app/lib/db/prisma";

export default async function BookmarkList() {
  const bookmarks = await prisma.bookmark.findMany({
    orderBy: { updatedAt: "desc" },
  });

  return <Container bookmarks={bookmarks} />;
}
