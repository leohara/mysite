"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { useAtom } from "jotai";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillGithub, AiOutlineArrowLeft } from "react-icons/ai";
// import { AiFillProject } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosBeer } from "react-icons/io";
import { MdArticle, MdCopyright } from "react-icons/md";

import LinkButton from "./LinkButton";

import { sidebarOpenAtom } from "@/app/(general)/state";
import Header from "@/app/components/Header";

export default function Sidebar() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [, setIsOpen] = useAtom(sidebarOpenAtom);

  const pathName = usePathname().split("/");
  const isDetail = typeof pathName[2] !== "undefined";
  const returnURL = pathName[1];

  const sidebarRef = useRef<HTMLDivElement>(null);
  const closeSidebar = useCallback(
    (e: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    },
    [setIsOpen],
  );

  useEffect(() => {
    document.addEventListener("mousedown", closeSidebar);
    return () => {
      document.removeEventListener("mousedown", closeSidebar);
    };
  }, [closeSidebar]);

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setHasScrolled(e.currentTarget.scrollTop > 0);
  };

  return (
    <>
      <Link
        className={`
        ${"fixed z-30 ml-[20px] mt-[16px]"} 
        ${isDetail ? "block lg:hidden" : "hidden"}
        `}
        href={`/${returnURL}`}
      >
        <AiOutlineArrowLeft size={24} />
      </Link>
      <div className="z-30" ref={sidebarRef}>
        <div
          className={`
          ${"h-dvh overflow-y-auto border-r-[0.5px] border-r-[#eeeff2] bg-[#f6f6f6] text-[#404040]"}
          `}
          onScroll={onScroll}
        >
          <Header
            title={"leohara"}
            hasScrolled={hasScrolled}
            position={"left"}
          />
          <div className="min-h-[calc(100dvh-96px)] pt-[16px]">
            <div className="flex-col px-[24px]">
              <LinkButton name={"Home"} url={"/"}>
                <FaHome size={14} />
              </LinkButton>
              <LinkButton name={"Writings"} url={"/writings"}>
                <MdArticle size={14} />
              </LinkButton>
            </div>
            <div className="flex-col px-[24px]">
              <p className="text-[12px] text-[#9f9f9f]">Me</p>
              <LinkButton name={"About"} url={"/about"}>
                <IoIosBeer />
              </LinkButton>
              {/* TODO projects入れる */}
            </div>
            <div className="flex-col px-[24px]">
              <p className="text-[12px] text-[#9f9f9f]">Online</p>
              <LinkButton name={"Github"} url={"https://github.com/leohara"}>
                <AiFillGithub size={14} />
              </LinkButton>
              <LinkButton name={"X"} url={"/"}>
                <FaXTwitter size={14} />
              </LinkButton>
            </div>
          </div>
          <div
            className={`
              ${"h-[48px] w-[200px] px-[20px] text-[10px]"}

            `}
          >
            <div className="relative flex">
              <div className="absolute top-[2.5px]">
                <MdCopyright size={10} />
              </div>
              <p className="pl-[14px]">
                Copyright {new Date().getFullYear()} Leo Harada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
