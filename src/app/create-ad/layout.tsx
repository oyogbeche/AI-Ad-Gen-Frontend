'use client'
import { Metadata } from "next";
import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

// export const metadata: Metadata = {
//   title: "AI Adgen",
//   description: "Ad Selector page",
// };

const Page = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-h-screen bg-[#F9FAFB] flex flex-col justify-center items-center p-6">
        <div className="w-full max-w-lg md:max-w-3xl bg-white border rounded-md p-6">
            <Link
              href="/"
              className="flex items-center text-gray-600 hover:text-gray-800 cursor-pointer p-0"
            >
              <Image
                src="/arrow-left.svg"
                alt="Back"
                className="w-5 h-5 mr-2"
                width={10}
                height={10}
              />
              <span>Back</span>
            </Link>
          {children}
        </div>
      </div>
    </Suspense>
  );
};

export default Page;
