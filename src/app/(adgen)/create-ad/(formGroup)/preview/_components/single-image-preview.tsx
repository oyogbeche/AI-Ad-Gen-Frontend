"use client";

import { useState } from "react";
import ImageGrid from "./image-grid";
import SelectedImagePreview from "./selected-image-preview";

const images: string[] = [
  "/images/hng-wig-2.png",
];

export default function SinglePreview() {
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
