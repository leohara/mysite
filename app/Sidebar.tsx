"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillGithub, AiOutlineArrowLeft } from "react-icons/ai";
import { BsFillBookmarksFill, BsStack } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosBeer } from "react-icons/io";
import { MdArticle } from "react-icons/md";
import LinkButton from "./LinkButton";
import Header from "./components/Header";

export default function Sidebar() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const pathName = usePathname().split("/");
  const isDetail = typeof pathName[2] !== "undefined";
  const returnURL = pathName[1];

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setHasScrolled(e.currentTarget.scrollTop > 0);
  };
  return (
    <>
      <div
        className={`
          ${"fixed z-20 ml-[24px] mt-[20px] lg:hidden"}
          ${isOpen ? "hidden" : "block pr-[5px]"}
          ${isDetail ? "hidden" : ""}
        `}
      >
        <button className="space-y-[4px]" onClick={() => setIsOpen(!isOpen)}>
          <div className="h-[2px] w-4 bg-gray-600"></div>
          <div className="h-[2px] w-4 bg-gray-600"></div>
          <div className="h-[2px] w-4 bg-gray-600"></div>
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
          ${"z-10 h-screen w-[200px] lg:block"}
          ${isOpen ? "block" : "hidden"}
          ${isDetail ? "hidden" : ""}
        `}
      >
        <div
          className="fixed overflow-y-auto border-r-[0.5px] border-[#eeeff2] bg-[#F6F6F6] pb-[24px] text-[#404040]"
          onScroll={onScroll}
        >
          <div className="flex-col">
            <Header
              title={"Leo Harada"}
              hasScrolled={hasScrolled}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              isSide={true}
            />
            <div className="pt-[64px]">
              <div className="h-screen w-[200px]">
                <div className="flex-col px-[24px]">
                  <LinkButton name={"Home"} url={"/"} setIsOpen={setIsOpen}>
                    <FaHome size={14} />
                  </LinkButton>
                  <LinkButton
                    name={"Writings"}
                    url={"/writings"}
                    setIsOpen={setIsOpen}
                  >
                    <MdArticle size={14} />
                  </LinkButton>
                  <LinkButton
                    name={"Bookmarks"}
                    url={"/bookmarks"}
                    setIsOpen={setIsOpen}
                  >
                    <BsFillBookmarksFill size={14} />
                  </LinkButton>
                </div>
                <div className="flex-col px-[24px]">
                  <p className="text-[12px] text-[#9f9f9f]">Me</p>
                  <LinkButton
                    name={"About"}
                    url={"/about"}
                    setIsOpen={setIsOpen}
                  >
                    <IoIosBeer size={14} />
                  </LinkButton>
                  <LinkButton
                    name={"Stack"}
                    url={"/stack"}
                    setIsOpen={setIsOpen}
                  >
                    <BsStack size={14} />
                  </LinkButton>
                </div>
                <div className="flex-col px-[24px]">
                  <p className="text-[12px] text-[#9f9f9f]">Projects</p>
                </div>
                <div className="flex-col px-[24px]">
                  <p className="text-[12px] text-[#9f9f9f]">Online</p>
                  <LinkButton
                    name={"Github"}
                    url={"https://github.com/leohara"}
                    setIsOpen={setIsOpen}
                  >
                    <AiFillGithub size={14} />
                  </LinkButton>
                  <LinkButton name={"X"} url={"/"} setIsOpen={setIsOpen}>
                    <FaXTwitter size={14} />
                  </LinkButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
