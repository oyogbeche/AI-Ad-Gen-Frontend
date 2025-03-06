"use client";

import { useState } from "react";
import ImageGrid from "./image-grid";
import SelectedImagePreview from "./selected-image-preview";

const images: string[] = [
  "/images/man-holding-juice.jpg",
  "/images/sdyc.jpg",
  "/images/coca-cola.jpg",
  "/images/orange-juice.jpg",
];

export default function PreviewContent() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      {!selectedImage ? (
        <ImageGrid images={images} onSelect={setSelectedImage} />
      ) : (
        <SelectedImagePreview
          selectedImage={selectedImage}
          images={images}
          onSelect={setSelectedImage}
        />
      )}
    </>
  );
}
