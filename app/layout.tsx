/* eslint-disable tailwindcss/no-custom-classname */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "./Sidebar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "beatleos",
  description: "beatleos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} m-0 box-border h-screen w-full overflow-x-hidden p-0`}
      >
        <div className="flex">
          <Sidebar />
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
