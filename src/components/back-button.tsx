"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface BackButtonProps {
  fallbackUrl?: string;
  className?: string;
  label?: string;
}

const BackButton: React.FC<BackButtonProps> = ({
  fallbackUrl = "/",
  className = "mb-8",
  label = "Back",
}) => {
  const router = useRouter();

  const handleBack = () => {
    // App Router doesn't provide a way to check history length
    // so we can use window.history directly
    try {
      router.back();
    } catch {
      // If back navigation fails, go to fallback URL
      router.push(fallbackUrl);
    }
  };

  return (
    <div className={className}>
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
          {label}
        </span>
      </button>
    </div>
  );
};

export default BackButton;
