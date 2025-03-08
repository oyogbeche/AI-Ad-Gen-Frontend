"use client";

import React from "react";
import Image from "next/image";
import { SinglePreviewProps } from "@/types";

// const images: string[] = ["/images/hng-wig-2.png"];

export default function SinglePreview({ imageData }: SinglePreviewProps) {
  // console.log("imagedata", imageData);

  // const base64ImageData = imageData.image?.image_data;

  // const images = imageData.image?.image_data
  //   ? [imageData.image?.image_data]
  //   : [];

  const images = React.useMemo(() => {
    const baseImages = imageData?.image_url ? [imageData.image_url] : [];
    if (
      imageData?.additionalImages &&
      Array.isArray(imageData.additionalImages)
    ) {
      return [...baseImages, ...imageData.additionalImages];
    }
    return baseImages;
  }, [imageData]);

  // console.log("images", images);

  const [selectedImage, setSelectedImage] = React.useState<string>(
    images[0] || ""
  );

  // Update selectedImage when imageData changes
  React.useEffect(() => {
    if (images.length > 0) {
      setSelectedImage(images[0]);
    }
  }, [images]);

  if (!imageData) {
    return <div>No image data available</div>;
  }

  if (images.length === 0) {
    return <div>No images available for preview</div>;
  }

  const generateAltText = (imagePath: string) => {
    const fileName = imagePath.split("/").pop()?.split(".")[0] || "Image";
    return fileName
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div className="flex flex-col w-full">
      <div className="w-full">
        <Image
          className="rounded-lg w-full h-auto object-cover"
          src={selectedImage}
          height={374}
          width={815}
          alt={generateAltText(selectedImage)}
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
