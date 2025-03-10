"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Loader from "@/components/ui/loader";
import React, { Suspense } from "react";
import { useSubmitCampaign } from "@/domains/ads-gen/api/use-submit-campaign";
import { useCampaignImage } from "@/domains/ads-gen/api/use-campaign-image";
import { useParams } from "next/navigation";
import { DesktopAdPreviewNavigation } from "@/domains/external/components/desktop-ad-preview-navigation";
// import { MobileGenerateButton } from "@/domains/external/components/mobile-generate-button";
import SinglePreview from "@/domains/ads-gen/components/single-image-preview";
import { ImageAdFormData } from "@/domains/ads-gen/types";
import Image from "next/image";

export default function Page() {
  const { imageId } = useParams();
  const mutation = useSubmitCampaign();
  const {
    data: imageData,
    isLoading,
    error,
  } = useCampaignImage(imageId as string);

  const handleGenerateNewAd = (data: ImageAdFormData) => {
    try {
      const formatPayload = (formData: ImageAdFormData) => ({
        product_name: formData.productName,
        ad_goal: formData.adGoal,
        ad_size: formData.adSize,
        target_region: formData.region,
        demographic: formData.demographics,
        target_age_groups: formData.ageGroup,
        ad_language: formData.language,
      });

      const payload = formatPayload(data);

      // The mutation already handles all success/error/loading states internally
      mutation.mutate(payload);
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  };

  // Extract image URL and product name for the download feature
  const imageUrl = imageData?.image?.image_url || "";
  const productName = imageData?.image?.product_name || "ad";
  const imageName = productName.toLowerCase().replace(/\s+/g, "-");

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-full">
          <Loader />
        </div>
      }
    >
      <section className="flex flex-col items-center justify-center gap-8 w-full max-w-[879px] mx-auto rounded-[20px] pt-10 pb-[103px] px-6">
        <Card className="w-full max-w-[890px] border-none shadow-none py-0">
          <CardContent className="py-6 px-4 md:px-8">
            <DesktopAdPreviewNavigation
              className="my-10"
              onGenerateNewAd={handleGenerateNewAd}
              isLoading={mutation.isPending}
              imageUrl={!isLoading && !error ? imageUrl : undefined}
              imageName={imageName}
            />

            <CardHeader className="mb-6 md:mb-8 text-left md:text-center px-0">
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

            {isLoading ? (
              <div className="flex items-center justify-center p-10">
                <Loader fullscreen={false} />
              </div>
            ) : error ? (
              <div className="text-red-500 text-center p-4">
                Error loading image: {(error as Error).message}
              </div>
            ) : (
              <SinglePreview
                imageData={imageData}
                isLoading={mutation.isPending}
              />
            )}

            {/* <MobileGenerateButton
              onGenerateNewAd={handleGenerateNewAd}
              isLoading={mutation.isPending}
            /> */}
          </CardContent>
        </Card>
      </section>
    </Suspense>
  );
}
