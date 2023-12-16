import { Metadata } from "next";

import Container from "./Container";
import Post from "./Post";

import { SITE_NAME, SITE_URL } from "@/app/constants/site";
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
    metadataBase: new URL(SITE_URL),
    title: writing?.title,
    description: writing?.description?.slice(0, 100),
    keywords: ["leohara", writing?.title ?? ""], // TODO: タグ、キーワードなどを追加
    openGraph: {
      type: "website",
      locale: "ja_JP",
      url: `${SITE_URL}witings/${slug}`,
      siteName: SITE_NAME,
      title: writing?.title,
      description: writing?.description?.slice(0, 100),
    },
    twitter: {
      title: writing?.title,
      description: writing?.description?.slice(0, 100),
      card: "summary_large_image",
    },
  };
}

export default async function Page({ params: { slug } }: Props) {
  return (
    <Container>
      <Post postId={slug} />
    </Container>
  );
}
