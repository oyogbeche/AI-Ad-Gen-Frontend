
import Loader from "@/components/ui/loader";
import { Suspense } from "react";
import AdType from "../components/ad-type";

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
