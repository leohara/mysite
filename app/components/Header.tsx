import { AiOutlineClose } from "react-icons/ai";

type Props = {
  title: string;
  hasScrolled: boolean;
  isSide: boolean;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({
  title,
  hasScrolled,
  isSide,
  isOpen,
  setIsOpen,
}: Props) {
  return (
    <div
      className={`
        ${"fixed z-10 h-[56px]"}
        ${isSide ? "w-[200px] bg-[#f6f6f6]" : "w-[320px] bg-[#fff]"}
        ${hasScrolled ? "border-b shadow-bottom" : "shadow-none"}
        transition-shadow duration-300
        `}
    >
      <div className="flex px-[28px] pb-[14px] pt-[20px]">
        <button
          className={`
            ${"mr-[16px] lg:hidden"}
            ${isSide ? "" : "hidden"}
            ${isOpen ? "block" : "hidden"}
          `}
          onClick={() => setIsOpen(!isOpen)}
        >
          <AiOutlineClose size={16} />
        </button>
        <p
          className={`
          ${"font-[#363636] font-bold"}
          ${isSide ? "" : "pl-[32px]"}
        `}
        >
          {title}
        </p>
      </div>
    </div>
  );
}
