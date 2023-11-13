import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { redirect } from "next/navigation";
import NextAuthSessionProvider from "@/app/provider/SessionProvider";
import "./globals.css";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/utils/authOptions";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "edit page",
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
    <html lang="en">
      <body
        className={`${inter.className} m-0 box-border h-screen w-full overflow-x-hidden p-0`}
      >
        <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
      </body>
    </html>
  );
}
