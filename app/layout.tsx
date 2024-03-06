import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Govifyme",
  description: "Generated by create next app",
};

import Header from "@/components/header";
import OptionBar from "@/components/optionBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-slate-100 w-screen h-screen overflow-none flex flex-col  ${inter.className}`}
      >
        <Header />
        <OptionBar />
        {children}
      </body>
    </html>
  );
}
