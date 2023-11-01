'use client';

import { useState } from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";
import LinkButton from "./LinkButton";
import { FaHome } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import { BsStack, BsFillBookmarksFill } from "react-icons/bs";
import { IoIosBeer } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

export default function Sidebar() {

  const [hasScrolled, setHasScrolled] = useState(false);

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setHasScrolled(e.currentTarget.scrollTop > 0);
  }

  const pathName = usePathname().split('/').filter(segment => segment != '')[0];

  return (
    <div
      className="border-r-[0.5px] h-screen fixed w-[200px] overflow-y-auto border-[#eeeff2] bg-[#F6F6F6] text-[#404040]"
      onScroll={onScroll}
      >
      <div className="flex-col">
        <Header hasScrolled={hasScrolled}/>
        <div className="pt-[68px]">
          <div className="px-[24px] flex-col" >
            <LinkButton name={"Home"} url={"/"} ><FaHome size={14}/></LinkButton>
            <LinkButton name={"Writings"} url={"/writings"} ><MdArticle size={14}/></LinkButton>
            <LinkButton name={"Bookmarks"} url={"/bookmarks"} ><BsFillBookmarksFill size={14}/></LinkButton>
          </div>
          <div className="px-[24px] flex-col" >
            <p className="text-[#9f9f9f] text-[12px] weight-medium" >Me</p>
            <LinkButton name={"About"} url={"/about"} ><IoIosBeer size={14} /></LinkButton>
            <LinkButton name={"Stack"} url={"/stack"} ><BsStack size={14} /></LinkButton>
          </div>
          <div className="px-[24px] flex-col" >
            <p className="text-[#9f9f9f] text-[12px] weight-medium" >Online</p>
            <LinkButton name={"Github"} url={"https://github.com/leohara"} ><AiFillGithub size={14} /></LinkButton>
            <LinkButton name={"X"} url={"/"} ><FaXTwitter size={14} /></LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
}
