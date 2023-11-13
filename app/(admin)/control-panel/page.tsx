import { prisma } from "@/app/lib/db/prisma";
import Container from "./Container";

export default async function Page() {
  const writings = await prisma.writing.findMany({
    orderBy: { updatedAt: "desc" },
  });

  return (
    <>
      <Container writings={writings} />
    </>
  );
}
