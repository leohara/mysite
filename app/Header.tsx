type Props = {
  hasScrolled: boolean;
};

export default function Header({ hasScrolled }: Props) {
  return (
    <div
      className={`
        ${"fixed z-10 h-[56px] w-[200px] bg-[#F6F6F6]"}
        ${hasScrolled ? "shadow" : "shadow-none"}
        transition-shadow duration-300
        `}
    >
      <div className="px-[28px] pb-[14px] pt-[20px]">
        <p className="font-[#363636] font-bold">Leo Harada</p>
      </div>
    </div>
  );
}
