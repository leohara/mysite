"use client";

import { Writing } from "@prisma/client";
import WritingContainer from "./WritingContainer";

type Props = {
  children: React.ReactNode;
  writings: Writing[];
};

export default function Container({ children, writings }: Props) {
  return (
    <div className="grid grid-cols-[1fr_0px] lg:grid-cols-[320px_1fr]">
      <WritingContainer writings={writings} />
      {children}
    </div>
  );
}
