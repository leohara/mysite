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
        className={`${inter.className} p-0 m-0 box-border h-screen w-full overflow-x-hidden`}
      >
        <div className="flex">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
