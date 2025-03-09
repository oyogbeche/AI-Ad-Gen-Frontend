"use client";

import { ImageAdFormData } from "@/domains/ads-gen/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface DesktopAdPreviewNavigationProps {
  className?: string;
  isLoading?: boolean;
  onGenerateNewAd?: (data: ImageAdFormData) => void;
}

export const DesktopAdPreviewNavigation: React.FC<
  DesktopAdPreviewNavigationProps
> = ({ className = "", onGenerateNewAd, isLoading }) => {
  const router = useRouter();
  const handleBack = () => {
    router.push("/create-ad/ad-form?type=image");
  };

  const handleGoHome = () => {
    localStorage.removeItem("imageAdData");
    router.push("/");
  };

  const handleGenerateNewAd = () => {
    if (isLoading) return;
    try {
      const storedData = localStorage.getItem("imageAdData");
      if (storedData && onGenerateNewAd) {
        const parsedData = JSON.parse(storedData) as ImageAdFormData;
        onGenerateNewAd(parsedData);
      }
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center w-full">
        <button
          onClick={handleBack}
          className="flex items-center text-gray-600 hover:text-gray-800 cursor-pointer p-0"
          type="button"
        >
          <Image
            src="/arrow-left.svg"
            alt="Back"
            className="w-6 h-6 mr-2"
            width={24}
            height={24}
          />
          <span className="text-[#121316] font-medium text-base leading-6">
            Back
          </span>
        </button>

        {/* Vertical line after back button - desktop only */}
        <div className="hidden md:block w-px h-8 bg-gray-200"></div>

        {/* Generate New Ad button - hidden on mobile */}
        <button
          onClick={handleGenerateNewAd}
          disabled={isLoading}
          className={`hidden md:flex items-center font-medium cursor-pointer ${
            isLoading
              ? "text-[#D19AD1] cursor-not-allowed"
              : "text-[#B800B8] hover:text-[#B800B8]"
          }`}
          type="button"
        >
          <span>{isLoading ? "Generating..." : "Generate New Ad"}</span>
          <Image
            src="/rotate-cw.svg"
            alt="Generate"
            className={`w-5 h-5 ml-2 ${isLoading ? "animate-spin" : ""}`}
            width={20}
            height={20}
          />
        </button>

        {/* Vertical line after generate button - desktop only */}
        <div className="hidden md:block w-px h-8 bg-gray-200"></div>

        <button
          onClick={handleGoHome}
          className="flex items-center text-gray-600 hover:text-gray-800 cursor-pointer"
          type="button"
        >
          <Image
            src="/home.svg"
            alt="Home"
            className="w-5 h-5 mr-2"
            width={20}
            height={20}
          />
          <span className="text-[#121316] font-medium text-base leading-6">
            Go back Home
          </span>
        </button>
      </div>

      {/* Horizontal line underneath the entire navigation */}
      <div className="hidden md:block h-0.5 bg-gray-200 w-full mt-8"></div>
    </div>
  );
};
