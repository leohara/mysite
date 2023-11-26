import { ImageResponse } from "next/og";

import { prisma } from "@/app/lib/db/prisma";

type Props = {
  params: {
    slug: string;
  };
};

export const alt = "leohara";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({ params: { slug } }: Props) {
  const writing = await prisma.writing.findUnique({
    where: {
      postId: slug,
    },
  });
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div tw="flex h-full w-full flex-col bg-[#333] py-[30px] px-[200px] py-[80px]">
        <div tw="flex flex-col bg-[#f6f6f6] px-[80px] py-[30px] rounded-[16px]">
          <div tw="flex flex-col h-[350px]">
            <p tw="text-[48px] font-bold text-[#404040]">
              {writing?.title || "test"}
            </p>
          </div>
          <div tw="flex justify-center">
            <img
              width="64"
              height="64"
              src={`https://github.com/leohara.png`}
              style={{
                borderRadius: 32,
                backgroundColor: "#f6f6f6",
              }}
              alt="github avatar"
            />
            <a tw="text-[30px] pl-[30px] top-[12px]">beatleos.com</a>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
