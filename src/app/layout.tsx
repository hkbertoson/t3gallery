import "~/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";

import { Inter } from "next/font/google";
import { TopNav } from "./_components/topnav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`font-sans ${inter.variable}  flex flex-col gap-4`}>
          <TopNav />
          {children}5
        </body>
      </html>
    </ClerkProvider>
  );
}
