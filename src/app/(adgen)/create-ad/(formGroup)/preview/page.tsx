"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Loader from "@/components/ui/loader";
import Image from "next/image";
import { Suspense } from "react";
import SinglePreview from "./_components/single-image-preview";
import AdPreviewNavigation, {
  MobileGenerateButton,
} from "@/components/ad-preview-navigation";

export default function Page() {
  const handleGenerateNewAd = () => {
    // Your logic to generate a new ad
    console.log("Generating new ad...");
  };

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-full">
          <Loader />
        </div>
      }
    >
      <section className="flex flex-col items-center justify-center gap-8 w-full max-w-[879px] mx-auto rounded-[20px] pt-10 pb-[103px] px-4 md:px-6">
        <Card className="w-full max-w-[890px] border-none shadow-none py-0">
          <CardContent className="py-6 px-2 md:px-8">
            <AdPreviewNavigation
              className="my-10"
              onGenerateNewAd={handleGenerateNewAd}
            />

            <CardHeader className="mb-6 md:mb-8 text-left md:text-center px-0">
              <CardTitle className="text-[28px] leading-[36px] text-[#121316] font-semibold">
                All Done!
              </CardTitle>
              <p className="text-[#667185] text-[14px] md:text-[18px] font-normal mt-1">
                Below is your AI generated Ad Campaign
              </p>
            </CardHeader>

            <div className="mb-6 md:mb-8">
              <div className="max-w-[342px] w-full mx-auto flex flex-col gap-6 ">
                <div className="flex items-center justify-center gap-1 :max-w-[295px] w-full mx-auto ">
                  <Image
                    className=""
                    src="/preview-tick.svg"
                    height={24}
                    width={24}
                    alt="Tick icon"
                    priority
                  />
                  <div className="h-1 max-w-[230px] md:max-w-[239px] w-full bg-[#458DE1] rounded-full"></div>
                  <div className="w-6 h-6 border-3 border-[#458DE1] rounded-full"></div>
                </div>

                <div className="w-full flex items-center justify-between text-base font-bold leading-5 text-[#458DE1]">
                  <p>Enter Ad Details</p>
                  <p>Your Generated Ad</p>
                </div>
              </div>

              {/* <div className="relative w-full h-2.5 bg-white-200 rounded-full mt-6">
                <div className="absolute left-0 h-2 bg-[#1467C5] rounded-full w-[47%] md:w-[49%]"></div>
                <div className="absolute right-0 h-2 bg-[#1467c5] rounded-full w-[47%] md:w-[49%]"></div>
              </div> */}
            </div>

            <SinglePreview />

            <MobileGenerateButton onGenerateNewAd={handleGenerateNewAd} />
          </CardContent>
        </Card>
      </section>
    </Suspense>
  );
}
