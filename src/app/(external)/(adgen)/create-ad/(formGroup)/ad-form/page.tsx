import React, { Suspense } from "react";
import Loader from "@/components/ui/loader";
import { AdForm } from "@/domains/ads-gen/components/ad-form";

const Page = () => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-full">
          <Loader />
        </div>
      }
    >
      <AdForm />
    </Suspense>
  );
};

export default Page;
