import React, { Suspense } from "react";
import { Metadata } from "next";
import AdFormPage from "./_components/ad-form";
import Loader from "@/components/ui/loader";

export const metadata: Metadata = {
  title: "AI Adgen",
  description: "Ad Form",
};

const Page = () => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-full">
          <Loader />
        </div>
      }
    >
      {" "}
      <AdFormPage />
    </Suspense>
  );
};

export default Page;
