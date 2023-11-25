import { Suspense } from "react";

import { Metadata } from "next";

import Container from "./Container";
import Post from "./_presenter/Post";

import { SITE_URL } from "@/app/constants/site";
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
  console.log(writing);

  return {
    title: writing?.title,
    description: writing?.content,
    openGraph: {
      title: writing?.title,
      description: writing?.content,
      images: {
        url: new URL(`${SITE_URL}api/og`),
        width: 1200,
        height: 630,
      },
    },
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
