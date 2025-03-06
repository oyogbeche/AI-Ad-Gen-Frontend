import clsx from "clsx";
import type { Metadata } from "next";

import { Manrope } from "next/font/google";

import { TopProgressBarProvider } from "@/lib/nprogress/top-progress-bar-provider";
import QueryProvider from "@/lib/react-query/query-provider";

import "../globals.css";

import { SonnerToaster } from "../sections/sonner-toaster";
import Link from "next/link";
import Image from "next/image";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Adgen",
  description: "AI Adgen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(manrope.variable)}>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <body className="font-nunito bg-[#F9FAFB]">
        <SonnerToaster />
        <QueryProvider>
          <header className="flex justify-center border-b border-[1.5px] border-[#F8E6F8] w-full py-[18px] px-2 sm:px-5 md:px-16 bg-white">
            <Link href="/">
              <Image
                src="/header-logo.svg"
                alt="Adgen AI Logo"
                width={150}
                height={40}
                priority
              />
            </Link>
          </header>
          <TopProgressBarProvider>{children}</TopProgressBarProvider>
          <footer className="flex flex-col items-center justify-center mt-[83px]  py-7 ">
            <section className="flex flex-col items-center max-w-[369px] ">
              <p className="pt-[24px] text-[#5F5F5F]">
                &copy; 2025 Adgen-AI. All rights reserved.
              </p>
            </section>
          </footer>
        </QueryProvider>
      </body>
    </html>
  );
}
