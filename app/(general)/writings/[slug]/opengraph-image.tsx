import { ImageResponse } from "next/og";

import { prisma } from "@/app/lib/db/prisma";

type Props = {
  params: {
    slug: string;
  };
};

export const alt = "LaunchX";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({ params: { slug } }: Props) {
  const project = await prisma.writing.findUnique({
    where: {
      postId: slug,
    },
  });
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {project?.title}
      </div>
    ),
    {
      ...size,
    },
  );
}
