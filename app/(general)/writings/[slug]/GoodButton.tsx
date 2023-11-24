"use client";

import { useState, useTransition } from "react";

import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

import { addCount } from "./actions";

export default function GoodButton({
  likes,
  id,
}: {
  likes: number;
  id: string;
}) {
  const [count, setCount] = useState(0);
  const [likesCount, setLikesCount] = useState(likes);
  const [isClicked, setIsClicked] = useState(false);
  const [, startTransition] = useTransition();

  const clickHandler = () => {
    setIsClicked(true);
    setLikesCount(likesCount + 1);
    setCount(count + 1);
    startTransition(() => addCount(id, likesCount));
  };

  return (
    <>
      <div className="flex justify-center">
        <button
          className={`
                ${isClicked ? "pt-[10px]" : ""}
                ${count < 19 ? "cursor-pointer" : "pointer-events-none"}
              `}
          onClick={clickHandler}
        >
          {isClicked ? (
            <>
              <FaHeart size={60} color="#e91e62" />
              <p>{likesCount}</p>
            </>
          ) : (
            <>
              <CiHeart size={80} />
            </>
          )}
        </button>
      </div>
      <div className="pb-[150px] text-center">
        {count < 19 ? <></> : <p className="font-semibold">Thank You!</p>}
      </div>
    </>
  );
}
