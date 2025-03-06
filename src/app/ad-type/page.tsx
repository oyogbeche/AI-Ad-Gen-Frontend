import React, { Suspense } from "react";
import AdSelectorPage from "./ad-type-selector";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Adgen",
  description: "Ad Selector page",
};

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AdSelectorPage />
    </Suspense>
  );
};

export default Page;
