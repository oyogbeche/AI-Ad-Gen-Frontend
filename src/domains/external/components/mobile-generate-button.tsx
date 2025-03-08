"use client";

import { ImageAdFormData } from "@/domains/ads-gen/types";
import Image from "next/image";
import React from "react";

export const MobileGenerateButton: React.FC<{
  onGenerateNewAd?: (data: ImageAdFormData) => void;
  className?: string;
}> = ({ onGenerateNewAd, className = "" }) => {
  const handleGenerateNewAd = () => {
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
    <button
      onClick={handleGenerateNewAd}
      className={`md:hidden flex items-center justify-center text-[#B800B8] hover:text-[#B800B8] font-medium cursor-pointer w-full py-3 mt-6 border-0 rounded-lg ${className}`}
      type="button"
    >
      <span>Generate New Ad</span>
      <Image
        src="/rotate-cw.svg"
        alt="Generate"
        className="w-5 h-5 ml-2"
        width={20}
        height={20}
      />
    </button>
  );
};
