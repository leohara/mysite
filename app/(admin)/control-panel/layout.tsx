import { Inter } from "next/font/google";
import { redirect } from "next/navigation";
import { Toaster } from "react-hot-toast";

import type { Metadata } from "next";

import "@/app/globals.css";

import NotFound from "@/app/(admin)/not-found";
import { env } from "@/app/lib/env";
import { getAuthSession } from "@/app/lib/next-auth/getAuthSession";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Control Panel",
  description: "beatleos",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getAuthSession();
  if (!session) redirect("/api/auth/signin");
  const EMAIL = env.MY_EMAIL;

  return (
    <html lang="en">
      <body
        className={`${inter.className} m-0 box-border min-h-screen w-full overflow-x-hidden p-0`}
      >
        {session?.user?.email !== EMAIL ? (
          <>
            <NotFound />
          </>
        ) : (
          <>
            {children}
            <Toaster position="top-center" />
          </>
        )}
      </body>
    </html>
  );
}
