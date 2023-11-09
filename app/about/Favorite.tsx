"use client";

import { useState } from "react";
import { GoTriangleRight, GoTriangleDown } from "react-icons/go";

export default function Favorite() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <GoTriangleDown onClick={() => setIsOpen(!isOpen)} />
      ) : (
        <GoTriangleRight onClick={() => setIsOpen(!isOpen)} />
      )}
      {isOpen && <div>アルバムの話をするで</div>}
    </>
  );
}
