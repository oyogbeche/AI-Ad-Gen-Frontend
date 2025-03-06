"use client";

import Image from "next/image";

interface SelectedImagePreviewProps {
  selectedImage: string;
  images: string[];
  onSelect: (image: string) => void;
}

export default function SelectedImagePreview({
  selectedImage,
  images,
  onSelect,
}: SelectedImagePreviewProps) {
  const generateAltText = (imagePath: string) => {
    const fileName = imagePath.split("/").pop()?.split(".")[0] || "Image";
    return fileName
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <Image
        className="rounded-[8px] w-full h-[374px] object-cover"
        src={selectedImage}
        height={374}
        width={815}
        alt={generateAltText(selectedImage)}
      />

      <div className="flex mx-auto gap-2">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative cursor-pointer"
            onClick={() => onSelect(image)}
          >
            <Image
              className={`rounded-[8px] object-cover ${
                selectedImage === image
                  ? "border-3 border-[#121316] transform scale-105"
                  : ""
              }`}
              src={image}
              height={120}
              width={177.75}
              alt={generateAltText(image)}
            />
            {selectedImage !== image && (
              <div className="absolute inset-0 bg-[rgba(42,42,42,0.8)] rounded-[8px]"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
