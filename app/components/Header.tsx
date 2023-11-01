type Props = {
  title: string;
  hasScrolled: boolean;
  isSide: boolean;
};

export default function Header({ title, hasScrolled, isSide }: Props) {
  return (
    <div
      className={`
        ${"fixed z-10 h-[56px] border-r-[0.5px] border-[#eeeff2]"}
        ${isSide ? "w-[200px] bg-[#f6f6f6]" : "w-[320px] bg-[#fff]"}
        ${hasScrolled ? "border-[#f6f6f6] shadow" : "shadow-none"}
        transition-shadow duration-300
        `}
    >
      <div className="px-[28px] pb-[14px] pt-[20px]">
        <p className="font-[#363636] font-bold">{title}</p>
      </div>
    </div>
  );
}
