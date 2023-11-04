"use client";

import { useState } from "react";
import Header from "../components/Header";

export default function Page() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setHasScrolled(e.currentTarget.scrollTop > 0);
  };

  return (
    <div className="flex-1">
      <div
        className="fixed h-screen overflow-y-auto pb-[200px] text-[#050505]"
        onScroll={onScroll}
      >
        <Header title={""} hasScrolled={hasScrolled} position={"right"} />
        <div className="px-[45px] pt-[80px] sm:px-[60px] md:px-[120px] lg:px-[150px]">
        </div>
      </div>
    </div>
  );
}
