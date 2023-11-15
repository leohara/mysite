"use client";

import { useState } from "react";
import { GoTriangleRight, GoTriangleDown } from "react-icons/go";

export default function Favorite({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="flex" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <GoTriangleDown /> : <GoTriangleRight />}
        <p className="mt-[-3px]">{title}</p>
      </button>
      <div
        className={`
        ml-[8p] grid overflow-hidden transition-all duration-500 ease-in-out
        ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
      `}
      >
        <div className="mt-[8px] grid grid-cols-1 overflow-hidden pt-[8px] lg:grid-cols-2">
          {children}
        </div>
      </div>
    </>
  );
}
