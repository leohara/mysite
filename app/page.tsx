"use client";

import { useState, useContext } from "react";
import { SidebarContext } from "./provider/SidebarProvider";
import Header from "@/app/components/Header";

export default function Page() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setHasScrolled(e.currentTarget.scrollTop > 0);
  };

  const { isOpen } = useContext(SidebarContext);

  return (
    <div className="flex-1">
      <div
        className={`
        ${"fixed h-screen overflow-y-auto pb-[200px] text-[#050505]"}
        ${isOpen ? "pointer-events-none z-20 bg-[#ccc] opacity-5" : "bg-[#fff]"}
        `}
        onScroll={onScroll}
      >
        <Header title={""} hasScrolled={hasScrolled} position={"right"} />
        <div className="px-[45px] pt-[80px] sm:px-[60px] md:px-[120px] lg:px-[150px]">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum, deserunt impedit tempora recusandae enim dolore. Facere totam aperiam dolorum ad, itaque corporis mollitia amet commodi, numquam quisquam natus quo?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum, deserunt impedit tempora recusandae enim dolore. Facere totam aperiam dolorum ad, itaque corporis mollitia amet commodi, numquam quisquam natus quo?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum, deserunt impedit tempora recusandae enim dolore. Facere totam aperiam dolorum ad, itaque corporis mollitia amet commodi, numquam quisquam natus quo?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum, deserunt impedit tempora recusandae enim dolore. Facere totam aperiam dolorum ad, itaque corporis mollitia amet commodi, numquam quisquam natus quo?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum, deserunt impedit tempora recusandae enim dolore. Facere totam aperiam dolorum ad, itaque corporis mollitia amet commodi, numquam quisquam natus quo?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum, deserunt impedit tempora recusandae enim dolore. Facere totam aperiam dolorum ad, itaque corporis mollitia amet commodi, numquam quisquam natus quo?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum, deserunt impedit tempora recusandae enim dolore. Facere totam aperiam dolorum ad, itaque corporis mollitia amet commodi, numquam quisquam natus quo?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum, deserunt impedit tempora recusandae enim dolore. Facere totam aperiam dolorum ad, itaque corporis mollitia amet commodi, numquam quisquam natus quo?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum, deserunt impedit tempora recusandae enim dolore. Facere totam aperiam dolorum ad, itaque corporis mollitia amet commodi, numquam quisquam natus quo?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum, deserunt impedit tempora recusandae enim dolore. Facere totam aperiam dolorum ad, itaque corporis mollitia amet commodi, numquam quisquam natus quo?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum, deserunt impedit tempora recusandae enim dolore. Facere totam aperiam dolorum ad, itaque corporis mollitia amet commodi, numquam quisquam natus quo?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum, deserunt impedit tempora recusandae enim dolore. Facere totam aperiam dolorum ad, itaque corporis mollitia amet commodi, numquam quisquam natus quo?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum, deserunt impedit tempora recusandae enim dolore. Facere totam aperiam dolorum ad, itaque corporis mollitia amet commodi, numquam quisquam natus quo?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum, deserunt impedit tempora recusandae enim dolore. Facere totam aperiam dolorum ad, itaque corporis mollitia amet commodi, numquam quisquam natus quo?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum, deserunt impedit tempora recusandae enim dolore. Facere totam aperiam dolorum ad, itaque corporis mollitia amet commodi, numquam quisquam natus quo?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum, deserunt impedit tempora recusandae enim dolore. Facere totam aperiam dolorum ad, itaque corporis mollitia amet commodi, numquam quisquam natus quo?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum, deserunt impedit tempora recusandae enim dolore. Facere totam aperiam dolorum ad, itaque corporis mollitia amet commodi, numquam quisquam natus quo?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum, deserunt impedit tempora recusandae enim dolore. Facere totam aperiam dolorum ad, itaque corporis mollitia amet commodi, numquam quisquam natus quo?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum, deserunt impedit tempora recusandae enim dolore. Facere totam aperiam dolorum ad, itaque corporis mollitia amet commodi, numquam quisquam natus quo?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum, deserunt impedit tempora recusandae enim dolore. Facere totam aperiam dolorum ad, itaque corporis mollitia amet commodi, numquam quisquam natus quo?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum, deserunt impedit tempora recusandae enim dolore. Facere totam aperiam dolorum ad, itaque corporis mollitia amet commodi, numquam quisquam natus quo?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum, deserunt impedit tempora recusandae enim dolore. Facere totam aperiam dolorum ad, itaque corporis mollitia amet commodi, numquam quisquam natus quo?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum, deserunt impedit tempora recusandae enim dolore. Facere totam aperiam dolorum ad, itaque corporis mollitia amet commodi, numquam quisquam natus quo?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum, deserunt impedit tempora recusandae enim dolore. Facere totam aperiam dolorum ad, itaque corporis mollitia amet commodi, numquam quisquam natus quo?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum, deserunt impedit tempora recusandae enim dolore. Facere totam aperiam dolorum ad, itaque corporis mollitia amet commodi, numquam quisquam natus quo?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum, deserunt impedit tempora recusandae enim dolore. Facere totam aperiam dolorum ad, itaque corporis mollitia amet commodi, numquam quisquam natus quo?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum, deserunt impedit tempora recusandae enim dolore. Facere totam aperiam dolorum ad, itaque corporis mollitia amet commodi, numquam quisquam natus quo?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum, deserunt impedit tempora recusandae enim dolore. Facere totam aperiam dolorum ad, itaque corporis mollitia amet commodi, numquam quisquam natus quo?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum, deserunt impedit tempora recusandae enim dolore. Facere totam aperiam dolorum ad, itaque corporis mollitia amet commodi, numquam quisquam natus quo?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum, deserunt impedit tempora recusandae enim dolore. Facere totam aperiam dolorum ad, itaque corporis mollitia amet commodi, numquam quisquam natus quo?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum, deserunt impedit tempora recusandae enim dolore. Facere totam aperiam dolorum ad, itaque corporis mollitia amet commodi, numquam quisquam natus quo?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum, deserunt impedit tempora recusandae enim dolore. Facere totam aperiam dolorum ad, itaque corporis mollitia amet commodi, numquam quisquam natus quo?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum, deserunt impedit tempora recusandae enim dolore. Facere totam aperiam dolorum ad, itaque corporis mollitia amet commodi, numquam quisquam natus quo?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum, deserunt impedit tempora recusandae enim dolore. Facere totam aperiam dolorum ad, itaque corporis mollitia amet commodi, numquam quisquam natus quo?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum, deserunt impedit tempora recusandae enim dolore. Facere totam aperiam dolorum ad, itaque corporis mollitia amet commodi, numquam quisquam natus quo?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum, deserunt impedit tempora recusandae enim dolore. Facere totam aperiam dolorum ad, itaque corporis mollitia amet commodi, numquam quisquam natus quo?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum, deserunt impedit tempora recusandae enim dolore. Facere totam aperiam dolorum ad, itaque corporis mollitia amet commodi, numquam quisquam natus quo?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum, deserunt impedit tempora recusandae enim dolore. Facere totam aperiam dolorum ad, itaque corporis mollitia amet commodi, numquam quisquam natus quo?</p>
        </div>
      </div>
    </div>
  );
}