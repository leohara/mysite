import { Suspense } from "react";

// import { Metadata } from "next";

import Container from "./Container";
import Post from "./_presenter/Post";

// import { SITE_URL } from "@/app/constants/site";
// import { prisma } from "@/app/lib/db/prisma";
// import { getOgImage } from "@/app/lib/og/getOgImage";

type Props = {
  params: {
    slug: string;
  };
};

// export async function generateMetadata({
//   params: { slug },
// }: Props): Promise<Metadata> {
//   const writing = await prisma.writing.findUnique({
//     where: { postId: slug },
//   });
//   const ogImage = await getOgImage(slug);
//   return {
//     metadataBase: new URL(`${SITE_URL}writings/${slug}`),
//     title: writing?.title,
//     description: writing?.content,
//     openGraph: {
//       title: writing?.title,
//       description: writing?.content,
//       images: {
//         url: ogImage,
//         width: 1200,
//         height: 630,
//       },
//     },
//   };
// }

export default async function Page({ params: { slug } }: Props) {
  return (
    <Container>
      <Suspense fallback={<p className="text-center">Loading...</p>}>
        <Post postId={slug} />
      </Suspense>
    </Container>
  );
}
