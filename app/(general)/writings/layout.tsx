export const dynamic = "force-dynamic";

import { prisma } from "@/app/lib/db/prisma";
import Container from "./Container";

export default async function WritingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const writings = await prisma.writing.findMany({
    orderBy: { updatedAt: "desc" },
  });

  return <Container writings={writings}>{children}</Container>;
}
