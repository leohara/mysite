import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { redirect } from "next/navigation";
import "@/app/globals.css";
import { getServerSession } from "next-auth/next";
import { Toaster } from "react-hot-toast";
import NextAuthSessionProvider from "@/app/provider/SessionProvider";
import { authOptions } from "@/app/utils/authOptions";

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
  const session = await getServerSession(authOptions);
  if (!session) redirect("/api/auth/signin");

  return (
    <NextAuthSessionProvider>
      <html lang="en">
        <body
          className={`${inter.className} m-0 box-border h-screen w-full overflow-x-hidden p-0`}
        >
          {children}
          <Toaster position="top-center" />
        </body>
      </html>
    </NextAuthSessionProvider>
  );
}
