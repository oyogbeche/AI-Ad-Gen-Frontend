import React, { Suspense } from "react";
import { Metadata } from "next";
import AdFormPage from "./_components/ad-form";
import Link from "next/link";
import Image from "next/image";


export const metadata: Metadata = {
  title: "AI Adgen",
  description: "Ad Form",
};

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
         
      <AdFormPage />
    </Suspense>
  );
};

export default Page;
