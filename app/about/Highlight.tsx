export default function Highlight({
  children,
  experience,
}: {
  children: React.ReactNode;
  experience: boolean;
}) {
  return (
    <>
      <div className="relative mb-[16px]">
        <div
          className={`
    ${"absolute inset-y-0 left-0 w-0.5"}
    ${experience ? "bg-[#6081a2]" : "bg-[#5a9a92]"}
    `}
        ></div>
        <div
          className={`
    ${"absolute inset-y-0 right-0 w-0.5"}
    ${experience ? "bg-[#6081a2]" : "bg-[#5a9a92]"}
    `}
        ></div>
        <div className="absolute inset-x-0 top-0 h-0.5 bg-[#fff]"></div>
        <div className="absolute inset-x-0 bottom-0 h-0.5 bg-[#fff]"></div>
        <div className="relative p-4">
          <div
            className={`
      ${"absolute left-0 top-0 h-0.5 w-[20px]"}
      ${experience ? "bg-[#6081a2]" : "bg-[#5a9a92]"}
      `}
          ></div>
          <div
            className={`
      ${"absolute right-0 top-0 h-0.5 w-[20px]"}
      ${experience ? "bg-[#6081a2]" : "bg-[#5a9a92]"}
      `}
          ></div>
          <div
            className={`
      ${"absolute bottom-0 left-0 h-0.5 w-[20px]"}
      ${experience ? "bg-[#6081a2]" : "bg-[#5a9a92]"}
      `}
          ></div>
          <div
            className={`
      ${"absolute bottom-0 right-0 h-0.5 w-[20px]"}
      ${experience ? "bg-[#6081a2]" : "bg-[#5a9a92]"}
      `}
          ></div>
          <ul className="list-disc pl-4">{children}</ul>
        </div>
      </div>
    </>
  );
}
