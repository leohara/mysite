export default function Status({ isPublished }: { isPublished: boolean }) {
  return (
    <div
      className={`
    ${"h-[40px] w-[75px] rounded-[8px] border-[1px] text-center"}
    ${isPublished ? "border-[#3ea8ff]" : "border-[#868686]"}
    `}
    >
      <p
        className={`
        ${"py-[8px] font-semibold"}
        ${isPublished ? "text-[#3ea8ff]" : "text-[#868686]"}
        `}
      >
        {isPublished ? "公開中" : "下書き"}
      </p>
    </div>
  );
}
