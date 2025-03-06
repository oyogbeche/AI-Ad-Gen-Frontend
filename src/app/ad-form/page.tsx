import React, { Suspense } from "react";
import { Metadata } from "next";
import AdFormPage from "./_components/ad-form";


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
