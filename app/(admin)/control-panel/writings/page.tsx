import { prisma } from "@/app/lib/db/prisma";

export default async function Page({
  children,
}: {
  children: React.ReactNode;
}) {
  const writings = await prisma.writing.findMany({
    orderBy: { updatedAt: "desc" },
  });

  return <div>writing list page</div>;
}
