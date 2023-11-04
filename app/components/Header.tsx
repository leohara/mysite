import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarContext } from "../provider/SidebarProvider";

type Props = {
  title: string;
  hasScrolled: boolean;
  position: string;
};

export default function Header({ title, hasScrolled, position }: Props) {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  return (
    <div
      className={`
        ${"fixed z-20 h-[48px]"}
        ${
          position == "left"
            ? "w-[200.5px] border-r-[0.5px] border-r-[#eeeff2] bg-[#f6f6f6]"
            : ""
        }
        ${position == "middle" ? "w-screen bg-[#fff] lg:w-[319px]" : ""}
        ${position == "right" ? "w-screen bg-[#fff]" : ""}
        ${isOpen && position !== "left" ? "bg-[#ccc] opacity-5" : ""}
        ${hasScrolled ? "border-b shadow-bottom" : "shadow-none"}
        transition-shadow duration-300
        `}
    >
      <div className="flex px-[28px] pb-[14px] pt-[16px]">
        <button
          className={`
            ${"mr-[16px] lg:hidden"}
            ${position == "left" ? "" : "hidden"}
          `}
          onClick={() => setIsOpen(!isOpen)}
        >
          <AiOutlineClose size={16} />
        </button>
        <p
          className={`
          ${"font-[#363636] font-bold"}
          ${position == "left" ? "" : "pl-[32px] lg:pl-[0px]"}
        `}
        >
          {title}
        </p>
      </div>
    </div>
  );
}
