import { Suspense } from "react";
import { ImageResponse } from 'next/og'

import { Metadata } from "next";

import Container from "./Container";
import Post from "./_presenter/Post";

import { prisma } from "@/app/lib/db/prisma";

type ListingPageProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: ListingPageProps): Promise<Metadata> {
  const writing = await prisma.writing.findUnique({
    where: { postId: id },
  });

  return {
    title: writing?.title,
    description: writing?.content,
    openGraph: {
      title: writing?.title,
      description: writing?.content,
      images: {
        url: "",
        width: 1200,
        height: 630,
      },
    },
  };
}

export default async function Page({ params: { id } }: ListingPageProps) {
  return (
    <Container>
      <Suspense fallback={<p className="text-center">Loading...</p>}>
        <Post postId={id} />
      </Suspense>
    </Container>
  );
}
