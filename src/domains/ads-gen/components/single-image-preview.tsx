"use client";

import React from "react";
import Image from "next/image";
import { SinglePreviewProps } from "@/types";
import Loader from "@/components/ui/loader";

export default function SinglePreview({
  imageData,
  isLoading,
}: SinglePreviewProps & { isLoading?: boolean }) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-10 bg-gray-50 rounded-lg w-full h-[374px]">
        <Loader fullscreen={false} />
      </div>
    );
  }

  if (!imageData) {
    return (
      <div className="flex items-center justify-center p-10 bg-gray-50 rounded-lg w-full h-[374px]">
        <Loader fullscreen={false} />
      </div>
    );
  }

  const imageUrl = imageData?.image?.image_url || "";

  if (!imageUrl) {
    return (
      <div className="flex items-center justify-center p-8 bg-gray-100 rounded-lg w-full h-64">
        <p className="text-gray-500">No Image Ad available</p>
      </div>
    );
  }

  const altText = imageData?.image?.prompt || "Advertisement Image";

  return (
    <div className="w-full">
      <Image
        className="rounded-lg w-full h-auto object-cover"
        src={imageUrl}
        height={374}
        width={815}
        alt={altText}
        priority
        unoptimized
      />
    </div>
  );
}
