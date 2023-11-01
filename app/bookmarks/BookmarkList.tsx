import { prisma } from "@/app/lib/db/prisma";
import Container from "./Container";

export default async function BookmarkList() {
  const bookmarks = await prisma.bookmark.findMany({
    orderBy: { updatedAt: "desc" },
  });

  return <Container bookmarks={bookmarks} />;
}
