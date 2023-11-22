"use client";

import { useState } from "react";

import { AiOutlineDelete } from "react-icons/ai";

export default function Delete({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {!isModalOpen ? (
        <button
          onClick={() => setIsModalOpen(!isModalOpen)}
          className="w-[80px]"
        >
          <div className="ml-[20px] h-[40px] w-[40px] rounded-[50%] border-[1px] border-[#9f9f9f] pl-[4px] pt-[4px]">
            <AiOutlineDelete size={30} />
          </div>
        </button>
      ) : (
        <div className="mt-[-5px] flex-col">
          {children}
          <button
            onClick={() => setIsModalOpen(!isModalOpen)}
            className="ml-[10px] mt-[10px] h-[25px] w-[60px] rounded-[16px] bg-[#ccc] text-center text-[14px]"
          >
            cancel
          </button>
        </div>
      )}
    </>
  );
}
