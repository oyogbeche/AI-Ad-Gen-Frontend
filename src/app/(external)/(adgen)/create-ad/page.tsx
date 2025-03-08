import Loader from "@/components/ui/loader";
import { Suspense } from "react";
import AdType from "../../../../domains/ads-gen/components/ad-type";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Genz Ad",
  description: "Genz Ad form",
};

const page = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-full">
            <Loader />
          </div>
        }
      >
        <AdType />
      </Suspense>
    </div>
  );
};

export default page;
