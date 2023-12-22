"use client";

import { useState, useTransition } from "react";

import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

import { addCount } from "../actions";

export default function GoodButton({
  likes,
  id,
}: {
  likes: number;
  id: string;
}) {
  const [isClicked, setIsClicked] = useState(false);
  const [, startTransition] = useTransition();

  const clickHandler = () => {
    setIsClicked(true);
    startTransition(() => addCount(id, likes + 1));
  };

  return (
    <>
      <div className="flex-col justify-center pb-[30px]">
        <div className="text-center">
          <p
            className={`
            ${isClicked ? "block" : "opacity-0"}
            font-semibold
          `}
          >
            Thank You!
          </p>
          <button
            className={`
              ${isClicked ? "pt-[10px]" : ""}
              ${isClicked ? "pointer-events-none" : "cursor-pointer"}
            `}
            onClick={clickHandler}
          >
            {isClicked ? (
              <>
                <FaHeart size={60} color="#e91e62" />
              </>
            ) : (
              <>
                <CiHeart size={80} />
              </>
            )}
            <p
              className={`
            ${isClicked ? "block" : "opacity-0"}
          `}
            >
              {likes + 1}
            </p>
          </button>
        </div>
      </div>
    </>
  );
}
