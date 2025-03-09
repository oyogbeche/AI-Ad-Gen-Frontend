"use client";
import { useState } from "react";
import ImageGrid from "./image-grid";
import SelectedImagePreview from "./selected-image-preview";

interface PreviewContentProps {
  generatedImageUrl?: string; // optional, might not be present if loading/error
  loading: boolean;
  error: string | null;
}

export default function PreviewContent({
  generatedImageUrl,
  loading,
  error,
}: PreviewContentProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(
    generatedImageUrl || null
  );

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mb-4"></div>
        <p className="text-gray-600">Hold on, we're having trouble loading your image...</p>
      </div>
    );
  }

  if (loading && !selectedImage) {
    return (
      <div className="flex flex-col items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mb-4"></div>
        <p className="text-gray-600">Loading your generated image, please wait...</p>
      </div>
    );
  }

  return (
    <>
      {!selectedImage ? (
        <ImageGrid images={[]} onSelect={setSelectedImage} />
      ) : (
        <div>
          <SelectedImagePreview
            selectedImage={selectedImage}
            images={[]}\n            onSelect={setSelectedImage}\n          />\n          <div className=\"mt-4 flex justify-center\">\n            <button\n              onClick={() => {\n                const link = document.createElement(\"a\");\n                link.href = selectedImage;\n                link.download = selectedImage.split(\"/\").pop() || \"downloaded-image.png\";\n                document.body.appendChild(link);\n                link.click();\n                document.body.removeChild(link);\n              }}\n              className=\"px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700\"\n            >\n              Download Image\n            </button>\n          </div>\n        </div>\n      )}\n    </>\n  );\n}
