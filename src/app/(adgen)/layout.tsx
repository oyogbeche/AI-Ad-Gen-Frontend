<<<<<<< HEAD
import type { Metadata } from "next";

import { TopProgressBarProvider } from "@/lib/nprogress/top-progress-bar-provider";
import QueryProvider from "@/lib/react-query/query-provider";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import "./../globals.css";

<<<<<<<< HEAD:src/app/(adgen)/layout.tsx
import Header from "@/app/sections/header";
import { SonnerToaster } from "../sections/sonner-toaster";
========
import Header from "@/app/(landing)/sections/header";
import { SonnerToaster } from "./sections/sonner-toaster";
import Footer from "./sections/footer";
>>>>>>>> Victorvalour-auth-feature:src/app/(landing)/layout.tsx

=======
import clsx from "clsx";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import { TopProgressBarProvider } from "@/lib/nprogress/top-progress-bar-provider";
import QueryProvider from "@/lib/react-query/query-provider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./../globals.css";

import Header from "@/app/(landing)/sections/header";
import { SonnerToaster } from "../(landing)/sections/sonner-toaster";
import Footer from "../sections/footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});
>>>>>>> Victorvalour-auth-feature

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
<<<<<<< HEAD
    <html lang="en">
=======
    <html lang="en" className={clsx(manrope.variable)}>
>>>>>>> Victorvalour-auth-feature
      <body className="font-nunito bg-[#F9FAFB]" cz-shortcut-listen="true">
        <SonnerToaster />
        <QueryProvider>
          <Header />
<<<<<<< HEAD
          <TopProgressBarProvider>
            {children}
            </TopProgressBarProvider>
=======
          <TopProgressBarProvider>{children}</TopProgressBarProvider>
          <Footer />
>>>>>>> Victorvalour-auth-feature
        </QueryProvider>
      </body>
    </html>
  );
}
