"use client";

import AdPreviewNavigation, {
  MobileGenerateButton,
} from "@/components/ad-preview-navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Loader from "@/components/ui/loader";
import Image from "next/image";
import { Suspense } from "react";
import SinglePreview from "./_components/single-image-preview";

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
        <Card className="w-full max-w-[890px] border-none shadow-none py-0 px-4">
          <CardContent className="py-6 px-2 md:px-8">
            <AdPreviewNavigation
              className="my-10"
              onGenerateNewAd={handleGenerateNewAd}
            />

            <CardHeader className="mb-6 md:mb-8 text-center px-0">
              <CardTitle className="text-[28px] leading-[36px] text-[#121316] font-semibold">
                All Done!
              </CardTitle>
              <p className="text-[#667185] text-[18px] font-normal mt-1">
                Below is your AI generated Ad Campaign
              </p>
            </CardHeader>

            <div className="mb-6 md:mb-8">
              <div className="max-w-[342px] w-full mx-auto flex flex-col gap-6 ">
                <div className="flex items-center justify-center gap-1 max-w-[295px] w-full mx-auto ">
                  <Image
                    className=""
                    src="/preview-tick.svg"
                    height={24}
                    width={24}
                    alt="Tick icon"
                    priority
                  />
                  <div className="h-[3px] max-w-[180px] sm:max-w-[239px] w-full bg-[#458DE1] rounded-full"></div>
                  <div className="w-6 h-6 border-3 border-[#458DE1] rounded-full"></div>
                </div>

                <div className="w-full flex items-center justify-between leading-6 text-base text-[#458DE1]">
                  <p className="font-normal">Enter Ad Details</p>
                  <p className=" font-bold">Your Generated Ad</p>
                </div>
              </div>
            </div>

            <SinglePreview />

            <MobileGenerateButton onGenerateNewAd={handleGenerateNewAd} />
          </CardContent>
        </Card>
      </section>
    </Suspense>
  );
}
