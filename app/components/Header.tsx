import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarContext } from "../provider/SidebarProvider";

type Props = {
  title: string;
  hasScrolled: boolean;
  isSide: boolean;
};

export default function Header({ title, hasScrolled, isSide }: Props) {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  return (
    <div
      className={`
        ${"fixed z-20 h-[56px]"}
        ${
          isSide
            ? "w-[200.5px] border-r-[0.5px] border-r-[#eeeff2] bg-[#f6f6f6]"
            : "w-screen bg-[#fff] lg:w-[319px]"
        }
        ${isOpen && !isSide ? "bg-[#ccc] opacity-5" : ""}
        ${hasScrolled ? "border-b shadow-bottom" : "shadow-none"}
        transition-shadow duration-300
        `}
    >
      <div className="flex px-[28px] pb-[14px] pt-[20px]">
        <button
          className={`
            ${"mr-[16px] lg:hidden"}
            ${isSide ? "" : "hidden"}
          `}
          onClick={() => setIsOpen(!isOpen)}
        >
          <AiOutlineClose size={16} />
        </button>
        <p
          className={`
          ${"font-[#363636] font-bold"}
          ${isSide ? "" : "pl-[32px] lg:pl-[0px]"}
        `}
        >
          {title}
        </p>
      </div>
    </div>
  );
}
