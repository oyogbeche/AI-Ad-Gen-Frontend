"use client";

import React from "react";
import Image from "next/image";
import { SinglePreviewProps } from "@/types";
import Loader from "@/components/ui/loader";

export default function SinglePreview({
  imageData,
  isLoading,
}: SinglePreviewProps & { isLoading?: boolean }) {
  // console.log("imagedata", imageData);

  const fullImageUrl = imageData?.display_url
    ? `${process.env.NEXT_PUBLIC_API_URL}${imageData.display_url.replace(
        /^\/api\/v1/,
        ""
      )}`
    : "";

  // console.log("fullImageUrl", fullImageUrl);

  const altText = imageData?.image?.prompt || "Advertisement Image";

  const images = React.useMemo(() => {
    const baseImages = fullImageUrl ? [fullImageUrl] : [];
    if (
      imageData?.additionalImages &&
      Array.isArray(imageData.additionalImages)
    ) {
      return [...baseImages, ...imageData.additionalImages];
    }
    return baseImages;
  }, [fullImageUrl, imageData]);

  const [selectedImage, setSelectedImage] = React.useState<string>(
    images[0] || ""
  );

  React.useEffect(() => {
    if (images.length > 0) {
      setSelectedImage(images[0]);
    }
  }, [images]);

  if (!imageData || isLoading) {
    return <Loader fullscreen={false} />;
  }

  return (
    <div className="flex flex-col w-full">
      <div className="w-full">
        <Image
          className="rounded-lg w-full h-auto object-cover"
          src={selectedImage}
          height={374}
          width={815}
          alt={altText}
          priority
          unoptimized
        />
      </div>

      {images.length > 1 && (
        <div className="flex justify-center mt-4 gap-2">
          {images.map((image, index) => (
            <div
              key={index}
              className={`cursor-pointer transition-all duration-200 ${
                selectedImage === image ? "ring-2 ring-[#121316]" : "opacity-60"
              }`}
              onClick={() => setSelectedImage(image)}
            >
              <Image
                className="rounded-[8px] h-20 w-20 object-cover"
                src={image}
                height={80}
                width={80}
                alt={`Thumbnail ${index + 1}`}
                unoptimized
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
