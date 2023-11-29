import { useAtom } from "jotai";
import { AiOutlineClose } from "react-icons/ai";

import { sidebarOpenAtom } from "@/app/(general)/state";

type Props = {
  title: string;
  hasScrolled: boolean;
  position: string;
};

export default function Header({ title, hasScrolled, position }: Props) {
  const [isOpen, setIsOpen] = useAtom(sidebarOpenAtom);

  return (
    <div
      className={`
        ${"z-20 h-[48px] overflow-hidden transition-shadow duration-300"}
        ${
          position == "left"
            ? "grid grid-cols-[0fr] bg-[#f6f6f6] lg:grid-cols-[1fr]"
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
            ? "fixed w-screen border-r-[0.5px]  border-r-[#eeeff2] bg-[#fff] lg:w-[calc(100vw-500px)]"
            : ""
        }
        ${isOpen && position !== "left" ? "bg-[#ccc]" : ""}
        ${hasScrolled ? "border-b opacity-95 shadow-bottom" : "shadow-none"}
        `}
    >
      <div className="flex w-full px-[25px] pb-[14px] pt-[16px]">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <div
              className={`
              ${"mt-[-2px] h-[25px] w-[25px] rounded-[50%] bg-[#f6f6f6] pl-[4px] pt-[4px]"}
              ${
                hasScrolled
                  ? "border-[0.5px] border-[#eeeff2] pl-[3.5px] pt-[3.5px]"
                  : ""
              }
              ${isOpen && position !== "left" ? "opacity-0" : ""}
              `}
            >
              <AiOutlineClose size={18} />
            </div>
          ) : (
            <div
              className={`
              ${"space-y-[4px]"}
              ${position == "left" ? "hidden" : "lg:hidden"}
              ${position == "right-detail" ? "hidden" : ""}
              `}
            >
              <div className="h-[2px] w-4 bg-[#404040]"></div>
              <div className="h-[2px] w-4 bg-[#404040]"></div>
              <div className="h-[2px] w-4 bg-[#404040]"></div>
            </div>
          )}
        </button>
        <p
          className={`
            ${"font-[#363636] font-bold transition-opacity duration-300"}
            ${position == "left" ? "" : "pl-[24px] lg:pl-[0px]"}
            ${isOpen ? "pl-[24px]" : ""}
            ${position == "right-detail" ? "ml-[12px] truncate opacity-0" : ""}
            ${
              position == "right-detail" && hasScrolled
                ? "ml-[12px] truncate opacity-100"
                : ""
            }
          `}
        >
          {title}
        </p>
      </div>
    </div>
  );
}
