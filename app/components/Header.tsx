import { useContext } from "react";
import { SidebarContext } from "../provider/SidebarProvider";

type Props = {
  title: string;
  hasScrolled: boolean;
  position: string;
};

export default function Header({ title, hasScrolled, position }: Props) {
  const { isOpen } = useContext(SidebarContext);

  return (
    <div
      className={`
        ${"z-20 h-[48px] overflow-hidden"}
        ${
          position == "left"
            ? "grid w-[300px] grid-cols-[0fr] bg-[#f6f6f6] lg:w-[200px] lg:grid-cols-[1fr]"
            : ""
        }
        ${
          position == "middle"
            ? "fixed w-screen border-r-[0.5px] border-r-[#eeeff2] bg-[#fff] lg:w-[320px]"
            : ""
        }
        ${
          position == "right"
            ? "fixed w-screen border-r-[0.5px] border-r-[#eeeff2] bg-[#fff] lg:w-[calc(100vw-200px)]"
            : ""
        }
        ${
          position == "right-detail"
            ? "fixed w-screen border-r-[0.5px]  border-r-[#eeeff2] bg-[#fff] lg:w-[calc(100vw-520px)]"
            : ""
        }
        ${isOpen && position !== "left" ? "bg-[#ccc] opacity-5" : ""}
        ${hasScrolled ? "border-b shadow-bottom" : "shadow-none"}
        transition-shadow duration-300
        `}
    >
      <div className="w-full px-[25px] pb-[14px] pt-[16px]">
        <p
          className={`
          ${"font-[#363636] font-bold"}
          ${position == "left" ? "pl-[24px]" : "pl-[32px] lg:pl-[0px]"}
          ${position == "right-detail" ? "truncate" : ""}
        `}
        >
          {title}
        </p>
      </div>
    </div>
  );
}
