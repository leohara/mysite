"use client";

import { useState, useRef, useEffect, useContext, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AiFillGithub,
  AiOutlineArrowLeft,
  AiFillProject,
} from "react-icons/ai";
import { BsFillBookmarksFill, BsStack } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosBeer } from "react-icons/io";
import { MdArticle } from "react-icons/md";
import LinkButton from "./LinkButton";
import Header from "./components/Header";
import { SidebarContext } from "./provider/SidebarProvider";

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
      <div
        className={`
          ${"fixed z-20 ml-[24px] mt-[16px] lg:hidden"}
          ${isOpen ? "hidden" : "block pr-[5px]"}
          ${isDetail ? "hidden" : ""}
        `}
      >
        <button className="space-y-[4px]" onClick={() => setIsOpen(!isOpen)}>
          <div className="h-[2px] w-4 bg-[#404040]"></div>
          <div className="h-[2px] w-4 bg-[#404040]"></div>
          <div className="h-[2px] w-4 bg-[#404040]"></div>
        </button>
      </div>
      <Link
        className={`${"fixed z-20 ml-[22px] mt-[19px]"} ${
          isDetail ? "lg:hidden" : "hidden"
        }`}
        href={`/${returnURL}`}
      >
        <AiOutlineArrowLeft size={24} />
      </Link>
      <div
        className={`
          ${"z-30 w-[200px] lg:block"}
          ${isOpen ? "block" : "hidden"}
          ${isDetail ? "hidden" : ""}
        `}
        ref={sidebarRef}
      >
        <div
          className="fixed mb-[200px] overflow-y-auto border-r-[0.5px] border-[#eeeff2] bg-[#F6F6F6] text-[#404040]"
          onScroll={onScroll}
        >
          <Header
            title={"Leo Harada"}
            hasScrolled={hasScrolled}
            position={"left"}
          />
          <div className="pt-[64px]">
            <div className="h-screen w-[200px]">
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
                {/* <LinkButton name={"Stack"} url={"/stack"}>
                  <BsStack size={14} />
                </LinkButton> */}
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
    </>
  );
}
