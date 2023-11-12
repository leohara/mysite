/* eslint-disable tailwindcss/no-custom-classname */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "edit page",
  description: "beatleos",
};

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} m-0 box-border h-screen w-full overflow-x-hidden p-0`}
      >
        {children}
      </body>
    </html>
  );
}
