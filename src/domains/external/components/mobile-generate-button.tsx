"use client";

import { ImageAdFormData } from "@/domains/ads-gen/types";
import Image from "next/image";
import React from "react";

export const MobileGenerateButton: React.FC<{
  onGenerateNewAd?: (data: ImageAdFormData) => void;
  isLoading?: boolean;
  className?: string;
}> = ({ onGenerateNewAd, isLoading = false }) => {
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
    <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white shadow-lg border-t border-gray-200">
      <button
        onClick={handleGenerateNewAd}
        disabled={isLoading}
        className={`flex items-center justify-center w-full py-3 px-4 rounded-lg font-medium text-white ${
          isLoading
            ? "bg-purple-300 cursor-not-allowed"
            : "bg-[#B800B8] hover:bg-[#A000A0] active:bg-[#900090]"
        }`}
        type="button"
      >
        <span>{isLoading ? "Generating..." : "Generate New Ad"}</span>
        <Image
          src="/rotate-cw.svg"
          alt="Generate"
          className={`w-5 h-5 ml-2 invert ${isLoading ? "animate-spin" : ""}`}
          width={20}
          height={20}
        />
      </button>
    </div>
  );
};
