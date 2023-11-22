export const dynamic = "force-dynamic";

import Container from "./Container";

import { prisma } from "@/app/lib/db/prisma";

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
