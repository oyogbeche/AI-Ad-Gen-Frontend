"use client";

import Image from "next/image";

interface ImageGridProps {
  images: string[];
  onSelect: (image: string) => void;
}

export default function ImageGrid({ images, onSelect }: ImageGridProps) {
  const generateAltText = (imagePath: string) => {
    const fileName = imagePath.split("/").pop()?.split(".")[0] || "Image";
    return fileName
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 gap-2 w-full">
      {images.map((image, index) => (
        <div key={index} className="relative cursor-pointer">
          <Image
            className="rounded-[8px] w-full object-cover"
            src={image}
            height={374}
            width={404}
            alt={generateAltText(image)}
            onClick={() => onSelect(image)}
            priority
          />
        </div>
      ))}
    </div>
  );
}
