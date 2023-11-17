import { prisma } from "@/app/lib/db/prisma";
import Container from "./Container";

export default async function Page({ params }: { params: { slug: string } }) {
  const writing = await prisma.writing.findUnique({
    where: { postId: params.slug },
  });
  if (!writing || !writing.published) return <div>not found</div>;

  return (
    <>
      <Container writing={writing} />
    </>
  );
}
