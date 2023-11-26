/* eslint-disable tailwindcss/no-custom-classname */
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import Container from "./Container";

import type { Metadata } from "next";

import { SITE_NAME, SITE_URL } from "@/app/constants/site";
import { SidebarProvider } from "@/app/provider/SidebarProvider";

import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s - ${SITE_NAME}`,
  },
  description: "leohara personal website.",
  keywords: ["leohara", "原田零生"],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: "leohara personal website.",
  },
  twitter: {
    title: SITE_NAME,
    description: "leohara personal website.",
    card: "summary_large_image",
  },
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
          className={`${inter.className} m-0 box-border min-h-screen w-full overflow-hidden p-0`}
        >
          <Container>{children}</Container>
          {process.env.NODE_ENV == "production" && <Analytics />}
        </body>
      </SidebarProvider>
    </html>
  );
}
