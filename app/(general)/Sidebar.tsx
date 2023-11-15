"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import {
  AiFillGithub,
  AiFillProject,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { BsFillBookmarksFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosBeer } from "react-icons/io";
import { MdArticle } from "react-icons/md";
import { SidebarContext } from "../provider/SidebarProvider";
import Header from "../components/Header";
import LinkButton from "./LinkButton";

export default function Sidebar() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);

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
      <div className={`${isOpen ? "w-[320px]" : "lg:w-[200px]"}`}>
        <div
          className={`
          ${"z-30 grid grid-cols-[0fr] overflow-hidden transition-all duration-500 ease-in-out lg:grid-cols-[1fr]"}
          ${isOpen ? "grid-cols-[1fr]" : "grid-cols-[0fr]"}
        `}
          ref={sidebarRef}
        >
          <div
            className={`
          ${"h-screen overflow-y-auto border-r-[0.5px] border-r-[#eeeff2] bg-[#f6f6f6] text-[#404040]"}
          `}
            onScroll={onScroll}
          >
            <Header
              title={"leohara"}
              hasScrolled={hasScrolled}
              position={"left"}
            />
            <div className="pt-[16px]">
              <div className="flex-col px-[24px]">
                <LinkButton name={"Home"} url={"/"}>
                  <FaHome size={14} />
                </LinkButton>
              </div>
              <div className="flex-col px-[24px]">
                <p className="text-[12px] text-[#9f9f9f]">Me</p>
                <LinkButton name={"About"} url={"/about"}>
                  <IoIosBeer />
                </LinkButton>
                <LinkButton name={"Writings"} url={"/writings"}>
                  <MdArticle size={14} />
                </LinkButton>
                <LinkButton name={"Bookmarks"} url={"/bookmarks"}>
                  <BsFillBookmarksFill size={14} />
                </LinkButton>
                <LinkButton name={"Projects"} url={"/projects"}>
                  <AiFillProject />
                </LinkButton>
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
          </div>
        </div>
      </div>
      <div
        className={`
        ${"fixed z-20 ml-[24px] mt-[17px] lg:hidden"}
        ${isOpen ? "" : "pr-[5px] lg:block"}
        ${isDetail ? "hidden" : ""}
        `}
      ></div>
    </>
  );
}
