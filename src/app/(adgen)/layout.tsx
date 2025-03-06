import clsx from "clsx";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import { TopProgressBarProvider } from "@/lib/nprogress/top-progress-bar-provider";
import QueryProvider from "@/lib/react-query/query-provider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./../globals.css";

import Header from "@/app/sections/header";
import { SonnerToaster } from "../sections/sonner-toaster";

import Page from "./container";

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
      <body className="font-nunito bg-[#F9FAFB]" cz-shortcut-listen="true">
        <SonnerToaster />
        <QueryProvider>
          <Header />
          <TopProgressBarProvider>
            <Page>
            {children}
            </Page>
            </TopProgressBarProvider>
         
        </QueryProvider>
      </body>
    </html>
  );
}
