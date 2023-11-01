import { prisma } from "@/app/lib/db/prisma";
import Container from "./Container";

export default async function WritingList() {
  const writings = await prisma.writing.findMany({
    orderBy: { updatedAt: "desc" },
  });

  return <Container writings={writings} />;
}
