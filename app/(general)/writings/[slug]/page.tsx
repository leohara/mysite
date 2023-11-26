import { Suspense } from "react";

import { Metadata } from "next";

import Container from "./Container";
import Post from "./_presenter/Post";

import { prisma } from "@/app/lib/db/prisma";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const writing = await prisma.writing.findUnique({
    where: { postId: slug },
  });
  return {
    title: writing?.title,
    description: writing?.content,
  };
}

export default async function Page({ params: { slug } }: Props) {
  return (
    <Container>
      <Suspense fallback={<p className="text-center">Loading...</p>}>
        <Post postId={slug} />
      </Suspense>
    </Container>
  );
}
