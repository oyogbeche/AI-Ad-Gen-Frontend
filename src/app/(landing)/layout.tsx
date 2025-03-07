import type { Metadata } from "next";

import { TopProgressBarProvider } from "@/lib/nprogress/top-progress-bar-provider";
import QueryProvider from "@/lib/react-query/query-provider";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Manrope, Nunito } from "next/font/google";

import "./../globals.css";

import Header from "@/app/sections/header";
import Footer from "../sections/footer";
import { SonnerToaster } from "../sections/sonner-toaster";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "AI Adgen",
  description: "AI Adgen",
};

// manrope and nunito font from "next/font/google".
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
  weight: ["300", "400", "500", "700", "900"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(manrope.variable, nunito.variable)}>
      <body className="font-nunito bg-[#F9FAFB] overflow-x-hidden" cz-shortcut-listen="true">
        <SonnerToaster />
        <QueryProvider>
          <Header />
          <TopProgressBarProvider>{children}</TopProgressBarProvider>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
