<<<<<<< HEAD
<<<<<<< HEAD
=======
/* eslint-disable tailwindcss/no-custom-classname */
>>>>>>> 1f9c790 (importの順番に関するrulesの追加)
=======
>>>>>>> 2cdf5c0 (appルートに変更)
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import Container from "./Container";

import type { Metadata } from "next";

import { SidebarProvider } from "@/app/provider/SidebarProvider";

import "@/app/globals.css";

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
      <SidebarProvider>
        <body
          className={`${inter.className} m-0 box-border h-screen w-full overflow-hidden p-0`}
        >
          <Container>{children}</Container>
          <Analytics />
        </body>
      </SidebarProvider>
    </html>
  );
}
