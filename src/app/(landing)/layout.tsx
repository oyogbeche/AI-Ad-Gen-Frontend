import type { Metadata } from "next";

import { TopProgressBarProvider } from "@/lib/nprogress/top-progress-bar-provider";
import QueryProvider from "@/lib/react-query/query-provider";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import "./../globals.css";


import Header from "@/app/sections/header";
import Footer from "../sections/footer";
import { SonnerToaster } from "../sections/sonner-toaster";

export const metadata: Metadata = {
  title: "genz.ad",
  description: "genz.ad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">


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
