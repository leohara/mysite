"use client";

import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsFillBookmarksFill, BsStack } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosBeer } from "react-icons/io";
import { MdArticle } from "react-icons/md";
import LinkButton from "./LinkButton";
import Header from "./components/Header";

export default function Sidebar() {
  const [hasScrolled, setHasScrolled] = useState(false);

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setHasScrolled(e.currentTarget.scrollTop > 0);
  };

  return (
    <div
      className="fixed h-screen w-[200px] overflow-y-auto border-r-[0.5px] border-[#eeeff2] bg-[#F6F6F6] pb-[24px] text-[#404040]"
      onScroll={onScroll}
    >
      <div className="flex-col">
        <Header title={"Leo Harada"} hasScrolled={hasScrolled} isSide={true} />
        <div className="pt-[64px]">
          <div className="flex-col px-[24px]">
            <LinkButton name={"Home"} url={"/"}>
              <FaHome size={14} />
            </LinkButton>
            <LinkButton name={"Writings"} url={"/writings"}>
              <MdArticle size={14} />
            </LinkButton>
            <LinkButton name={"Bookmarks"} url={"/bookmarks"}>
              <BsFillBookmarksFill size={14} />
            </LinkButton>
          </div>
          <div className="flex-col px-[24px]">
            <p className="text-[12px] text-[#9f9f9f]">Me</p>
            <LinkButton name={"About"} url={"/about"}>
              <IoIosBeer size={14} />
            </LinkButton>
            <LinkButton name={"Stack"} url={"/stack"}>
              <BsStack size={14} />
            </LinkButton>
          </div>
          <div className="flex-col px-[24px]">
            <p className="text-[12px] text-[#9f9f9f]">Projects</p>
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
  );
}
