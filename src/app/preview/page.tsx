'use client'

import { ChevronLeft } from "lucide-react";
import { Suspense } from "react";
import PreviewContent from "./_components/preview-content";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="flex flex-col items-center justify-center gap-8 w-full max-w-[879px] mx-auto px-8 py-6 bg-white rounded-[20px] mt-10">
        <button
          onClick={handleBack}
          className="self-start flex gap-2.5 text-base font-semibold leading-6 cursor-pointer"
        >
          <ChevronLeft size={24} />
          Back
        </button>
        <h1 className="text-[28px] font-[600] leading-9 mt-[12px]">
          Let&apos;s set up your Ad
        </h1>
        <p className="text-[#667185] text-[18px] mt-[-32px]">
          Fill in the details below, then AI generates your ad instantly.
        </p>
        <div className="flex items-center justify-between gap-2 mt-8 w-full ">
          <div className="relative flex flex-col justify-center items-center text-center w-1/2 pb-6">
            <h4>STEP 1</h4>
            <p className="font-[700] leading-5 text-[14px]">Set Ad goals</p>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1.5 bg-[#1467C5] rounded-full"></div>
          </div>
          <svg
            width="2"
            height="24"
            viewBox="0 0 2 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="1"
              y1="4.37114e-08"
              x2="0.999999"
              y2="24"
              stroke="#CFCFCF"
              strokeWidth="2"
            />
          </svg>

          <div className="relative flex flex-col justify-center items-center text-center w-1/2 pb-6">
            <h4>STEP 2</h4>
            <p className="font-[700] leading-5 text-[14px]">Preview</p>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1.5 bg-[#1467C5] rounded-full"></div>
          </div>
        </div>

        <PreviewContent />
      </section>
    </Suspense>
  );
}
