// import { getServerSession } from "next-auth/next";
// import { authOptions } from "@/app/utils/authOptions";
import Container from "./Container";
import { prisma } from "@/app/lib/db/prisma";

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
