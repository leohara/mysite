export default function List({ experience }: { experience: boolean }) {
  return (
    <p
      className={`
    ${"mr-[4px] font-bold"}
    ${experience ? "text-[#6081a2]" : "text-[#5a9a92]"}
    `}
    >
      -
    </p>
  );
}
