import Image from "next/image";

export default function Album({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) {
  return (
    <div className="pb-[8px]">
      <div className="flex">
        <div className="h-[80px] w-[80px]">
          <Image
            className="rounded-[15px] border-[1px] border-gray-300"
            src={`/album/${name}`}
            width={500}
            height={500}
            alt="album image"
          />
        </div>
        <div className="flex-1 flex-col pl-[40px]">{children}</div>
      </div>
    </div>
  );
}
