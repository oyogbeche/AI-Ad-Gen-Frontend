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
  metadataBase: new URL('https://genz.ad'),
  title: {
    default: 'genz.ad',
    template: '%s | genz.ad',
  },
  description:
    'Genz.ad helps you generate High-converting, Smarter Adverts in minutes.',
  keywords: [
    'AI',
    'high-converting ads',
    'adverts',
    'compelling ads',
    'Ad services',
    'on-demand services',
  ],
  authors: [{ name: 'Phoenix Inc' }],
  creator: 'Phoenix Inc',
  publisher: 'Phoenix Inc',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://genz.ad',
    siteName: 'genz.ad',
    title: 'genz.ad - Generate High-converting, Smarter Adverts in minutes',
    description:
      'Genz.ad helps you generate High-converting, Smarter Adverts in minutes.',
  },
 
  applicationName: 'genz.ad',
  category: 'Service Provider',
}

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
