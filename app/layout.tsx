import { Inter } from "next/font/google";
import { Metadata } from "next";

import { ReactNode } from "react";

import { Toaster } from "react-hot-toast";

import { cn } from "@/lib/utils";

import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={cn("bg-indigo-300", font.className)}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}