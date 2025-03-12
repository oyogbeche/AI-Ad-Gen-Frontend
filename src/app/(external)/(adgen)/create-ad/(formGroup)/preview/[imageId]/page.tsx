"use client";

import Loader from "@/components/ui/loader";
import React, { Suspense, useEffect, useState } from "react";
import {
  useCampaignImage,
  useMockImage,
} from "@/domains/ads-gen/api/use-campaign-image";
import { useParams } from "next/navigation";
import { DesktopAdPreviewNavigation } from "@/domains/external/components/desktop-ad-preview-navigation";
import { ImageAdFormData } from "@/domains/ads-gen/types";
import Image from "next/image";

export default function Preview() {
  const { imageId } = useParams();

  // Flag to enable/disable testing mode
  // Set this to `false` to use real data
  const isTestingMode = true;

  const { data: imageData } = isTestingMode
    ? useMockImage(imageId as string)
    : useCampaignImage(imageId as string);

  // console.log("IMAGE DATA", imageData);

  const [imageAdData, setImageAdData] = useState<ImageAdFormData>({
    productName: "",
    demographics: "",
    region: "",
    ageGroup: [],
    adSize: "",
    language: "",
    adGoal: "",
  });

  useEffect(() => {
    try {
      const storedData = localStorage.getItem("imageAdData");
      if (storedData) {
        setImageAdData(JSON.parse(storedData));
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    }
  }, []);

  const imageUrl = imageData?.image?.image_url || "";

  const [copyStatus, setCopyStatus] = useState("");
  const handleCopy = async () => {
    const copiedLink = `http://localhost:3000/stand-alone/${imageId}`;

    try {
      await navigator.clipboard.writeText(copiedLink);
      setCopyStatus("Copied");
    } catch (error) {
      setCopyStatus("Failed to copy");
    }
  };

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-full">
          <Loader />
        </div>
      }
    >
      <div className="pt-8">
        <div className="bg-white max-w-[1200px] w-full mx-auto py-8 flex flex-col gap-6 rounded-[12px]">
          <div className="px-6">
            <DesktopAdPreviewNavigation
              imageUrl={imageUrl}
              handleCopy={handleCopy}
            />
          </div>

          <div className="px-6 flex max-lg:flex-col gap-6">
            <div className="rounded-[8px] lg:min-w-[598px] max-w-[598px] rounded=[8px] overflow-hidden">
              <Image
                className="rounded-[8px] w-full h-auto object-cover"
                src={imageUrl || "/progressImage.png"}
                height={598}
                width={395}
                alt={"Progress Image"}
                priority
                unoptimized
              />
            </div>

            <div className="max-w-[455px] w-full px-4 py-6 rounded-[8px] flex flex-col gap-4 border border-[#F2F2F2] bg-[#FCFCFC] max-h-[598px] overflow-y-auto">
              <div>
                <p className="text-[#121316] text-base font-medium leading-6 mb-3">
                  Ad Prompt
                </p>

                <div className="bg-[#FCFCFC] border border-[#E4E7EC] p-4 text-[18px] font-medium leading-7 text-[#7D7D7D] rounded-[9px]">
                  <p className="max-w-[362px] break-words">
                    {imageData?.image?.prompt}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1 font-normal text-base leading-6 py-1">
                  <h4 className="text-[#121316]">Product Name</h4>
                  <p className="text-[#5F5F5F]">{imageAdData?.productName}</p>
                </div>
                <div className="flex flex-col gap-1 font-normal text-base leading-6 py-1">
                  <h4 className="text-[#121316]">Aspect Ratio</h4>
                  <p className="text-[#5F5F5F]">{imageAdData?.adSize}</p>
                </div>
                <div className="flex flex-col gap-1 font-normal text-base leading-6 py-1">
                  <h4 className="text-[#121316]">Language</h4>
                  <p className="text-[#5F5F5F]">{imageAdData?.language}</p>
                </div>
                <div className="flex flex-col gap-1 font-normal text-base leading-6 py-1">
                  <h4 className="text-[#121316]">Resolution</h4>
                  {/* <p className="text-[#5F5F5F]">{imageAdData?.resolution}</p> */}
                </div>
                <div className="flex flex-col gap-1 font-normal text-base leading-6 py-1">
                  <h4 className="text-[#121316]">Target Audience</h4>
                  <p className="text-[#5F5F5F]">
                    {imageAdData?.ageGroup?.map((age) => age).join(", ") || ""}
                  </p>
                </div>
                <div className="flex flex-col gap-1 font-normal text-base leading-6 py-1">
                  <h4 className="text-[#121316]">Region</h4>
                  <p className="text-[#5F5F5F]">{imageAdData?.region}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
