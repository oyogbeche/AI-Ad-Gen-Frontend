"use client";
import React from "react";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const VideoAdForm = () => {
  const router = useRouter();

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

        <h2 className="text-2xl font-bold mb-6">Coming soon</h2>
      </div>
    </div>
  );
};
