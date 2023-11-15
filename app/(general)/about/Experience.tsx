export default function Experience({
  children,
  title,
  subtitle,
  term,
  last,
  experience,
}: {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  term: string;
  last: boolean;
  experience: boolean;
}) {
  return (
    <div className="contents">
      <div className="relative col-start-1 col-end-2 mr-[16px] md:mx-auto">
        <div
          className={`
        ${"absolute z-10 h-[16px] w-[16px] rounded-full text-center shadow"}
        ${!last ? "" : "top-[10px]"}
        ${experience ? "bg-[#6081a2]" : "bg-[#5a9a92]"}
        `}
        >
          <div className="absolute left-[3px] top-[3px] h-[10px] w-[10px] rounded-full bg-[#fff] text-center shadow"></div>
        </div>
        <div
          className={`
        ${"flex w-[16px] items-center justify-center"}
        ${!last ? "h-full" : "relative"}
        `}
        >
          <div
            className={`
          ${"pointer-events-none absolute top-0 h-[20px] w-[4px]"}
          ${!last ? "h-full" : "absolute top-0 h-[20px]"}
          ${experience ? "bg-[#6081a2]" : "bg-[#5a9a92]"}
          `}
          ></div>
        </div>
      </div>
      <div
        className={`
      ${"col-start-2 col-end-8 flex-col"}
      ${!last ? "mt-[-6px]" : "mt-[5px]"}
      `}
      >
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-[16px] text-[#333]">{subtitle}</p>
        <p
          className={`
          ${"mb-[16px] text-justify decoration-0"}
          ${experience ? "text-[#6081a2]" : "text-[#5a9a92]"}
        `}
        >
          {term}
        </p>
        {children}
      </div>
    </div>
  );
}
