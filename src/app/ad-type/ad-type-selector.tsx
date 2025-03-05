"use client";
import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

const AdSelectorPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedAdType, setSelectedAdType] = useState<string | null>(
    searchParams.get("type") || null
  );

  const handleAdTypeSelect = (type: string) => {
    setSelectedAdType(type);
  };
  const handleContinue = () => {
    if (selectedAdType) {
      console.log(`Selected ad type: ${selectedAdType}`);
      router.push(`/ad-form?type=${selectedAdType}`);
    }
  };

    const handleBack = () => {
      router.push("/ad-type");
    };

  return (
    <div className="min-h-full bg-[#F9FAFB] p-6 py-18 flex justify-center items-center">
      <div className="w-[890px] bg-white border rounded-md p-14">
        <div className="mb-8">
          <button
            onClick={handleBack}
            className="flex items-center text-gray-600 hover:text-gray-800 cursor-pointer"
          >
            <ChevronLeft className="mr-2" />
            <span>Back</span>
          </button>
        </div>

        <h2 className="text-2xl font-bold mb-6">Select Ad type</h2>

        <div className="grid grid-cols-2 gap-6 mb-8">
          <div
            className={`border-1 w-[371px] p-6 rounded-lg cursor-pointer transition-all flex items-start justify-between ${
              selectedAdType === "image"
                ? "border-[#B800B8] bg-[#F3E8F3]"
                : "border-gray-300 hover:border-[#B800B8]/50"
            }`}
            onClick={() => handleAdTypeSelect("image")}
          >
            <div className="flex flex-col items-start justify-center mb-4 ">
              <Image
                src="/image-icon.svg"
                alt="image svg"
                className="max-w-full max-h-full object-contain"
                quality={100}
                width={20}
                height={20}
              />
              <div className="mt-4">
                <h3 className="font-semibold text-base mb-1">Image Ad</h3>
                <p className="text-sm text-gray-600 max-w-[250px]">
                  Static image ads for social media, websites, and print
                </p>
              </div>
            </div>

            <div
              className={`w-3 h-3 rounded-full border-2 flex items-center justify-center ${
                selectedAdType === "image"
                  ? "border-[#B800B8] bg-[#B800B8]"
                  : "border-gray-300"
              }`}
            >
              {selectedAdType === "image" && (
                <Image
                  src="/check.svg"
                  alt="image svg"
                  className="max-w-full max-h-full object-contain"
                  quality={100}
                  width={20}
                  height={20}
                />
              )}
            </div>
          </div>
          <div
            className={`border-1 w-[371px] p-6 rounded-lg cursor-pointer transition-all flex items-start justify-between ${
              selectedAdType === "video"
                ? "border-[#B800B8] bg-[#F3E8F3]"
                : "border-gray-300 hover:border-[#B800B8]/50"
            }`}
            onClick={() => handleAdTypeSelect("video")}
          >
            <div className="flex flex-col items-start justify-center mb-4 ">
              <Image
                src="/image-icon.svg"
                alt="image svg"
                className="max-w-full max-h-full object-contain"
                quality={100}
                width={20}
                height={20}
              />

              <div className="mt-4">
                <h3 className="font-semibold text-base mb-1">Video Ad</h3>
                <p className="text-sm text-gray-600 max-w-[250px]">
                  Animated ads with motion and sound
                </p>
              </div>
            </div>

            <div
              className={`w-3 h-3  rounded-full border-2 flex items-center justify-center ${
                selectedAdType === "video"
                  ? "border-[#B800B8] bg-[#B800B8]/50"
                  : "border-gray-300"
              }`}
            >
              {selectedAdType === "video" && (
                <Image
                  src="/check.svg"
                  alt="image svg"
                  className="max-w-full max-h-full object-contain"
                  quality={100}
                  width={20}
                  height={20}
                />
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            className={`px-6 py-3 rounded-md transition-colors cursor-pointer ${
              selectedAdType
                ? "bg-[#B800B8] text-white hover:bg-[#960096]"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!selectedAdType}
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdSelectorPage;
