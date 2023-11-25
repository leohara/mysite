import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const parts = request.url.split("/");
  const postId = parts[parts.length - 1];
  console.error(postId);

  return new ImageResponse(
    (
      <div tw="flex h-full w-full flex-col bg-[#333] py-[30px] px-[200px] py-[80px]">
        <div tw="flex flex-col bg-[#f6f6f6] px-[80px] py-[30px] rounded-[16px]">
          <div tw="flex flex-col h-[350px]">
            <p tw="text-[48px] font-bold text-[#404040]">test</p>
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
      width: 1200,
      height: 630,
    },
  );
}
