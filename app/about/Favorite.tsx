"use client";

import { useState } from "react";
import Album from "./Album";
import { GoTriangleRight, GoTriangleDown } from "react-icons/go";

export default function Favorite() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className="flex" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <GoTriangleDown /> : <GoTriangleRight />}
        <p className="mt-[-3px]">Albums I Listened to a Lot in 2023</p>
      </button>
      {isOpen && (
        <div className="ml-[8px]">
          <div className="mt-[8px] grid grid-cols-1 lg:grid-cols-2">
            <Album name="chet_baker_sings.jpg">
              <p>Chet Baker Sings</p>
              <p>Chet Baker</p>
              <p>1956</p>
            </Album>
            <Album name="dog_caravan.jpg">
              <p>犬は吠えるがキャラバンは進む</p>
              <p>小沢健二</p>
              <p>1993</p>
            </Album>
            <Album name="memai.jpg">
              <p>ゆらゆら帝国のめまい</p>
              <p>ゆらゆら帝国</p>
              <p>2003</p>
            </Album>
            <Album name="fantasma.jpg">
              <p>Fantasma</p>
              <p>Cornelius</p>
              <p>1997</p>
            </Album>
            <Album name="3x3x3.jpg">
              <p>3×3×3</p>
              <p>ゆらゆら帝国</p>
              <p>1998</p>
            </Album>
          </div>
        </div>
      )}
    </div>
  );
}
