/* eslint-disable tailwindcss/no-custom-classname */
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";

import SidebarContainer from "../../components/SidebarContainer";

import type { Metadata } from "next";

import { SITE_NAME, SITE_URL } from "@/app/constants/site";

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
      <body className={`${inter.className} m-0 box-border overflow-hidden p-0`}>
        <SidebarContainer>{children}</SidebarContainer>
        {process.env.NODE_ENV == "production" && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  );
}
