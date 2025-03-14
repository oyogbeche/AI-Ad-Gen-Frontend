"use client";

//import { DownloadButton } from "@/domains/ads-gen/components/download-button";
import { ImageAdFormData } from "@/domains/ads-gen/types";
import { ArrowLeft, Check, ChevronDown, Download } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { toast } from "sonner";

interface DesktopAdPreviewNavigationProps {
  className?: string;
  isLoading?: boolean;
  onGenerateNewAd?: (data: ImageAdFormData) => void;
  imageUrl?: string | null;
  imageName?: string;
  handleCopy?: () => Promise<void>;
  type: string;
}

export const DesktopAdPreviewNavigation: React.FC<
  DesktopAdPreviewNavigationProps
> = ({
  className = "",
  isLoading,
  imageUrl,
  imageName = "ad",
  // handleCopy,
  type,
}) => {
  const router = useRouter();
  const [isDownloading, setIsDownloading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleBack = () => {
    if (type == "demo") router.push("/generate-ad");
    else router.push("/dashboard/ad-form");
  };

  // const downloadImage = async (format: "png" | "jpg") => {
  //   if (!imageUrl || isDownloading) return;

  //   setIsDownloading(true);
  //   setIsOpen(false);

  //   try {
  //     // Fetch the image directly

  //     // const response = await fetch(
  //     //   "https://cors-anywhere.herokuapp.com/" + imageUrl
  //     // );
  //     const response = await fetch(imageUrl);
  //     const blob = await response.blob();
  //     const blobUrl = URL.createObjectURL(blob);

  //     // Create a new blob with the desired format
  //     const extension = format === "png" ? "png" : "jpeg";
  //     const mimeType = `image/${extension}`;

  //     // For demonstration, we're using the blob directly
  //     const imageBlob = new Blob([blob], { type: mimeType });

  //     // Create download link
  //     const link = document.createElement("a");
  //     link.href = window.URL.createObjectURL(imageBlob);
  //     link.download = `${imageName}.${extension}`;
  //     link.click();

  //     // Cleanup
  //     window.URL.revokeObjectURL(link.href);

  //     toast.custom(() => (
  //       <div className="max-w-md w-full bg-white rounded-lg shadow-lg pointer-events-auto flex items-center p-4">
  //         <div className="flex items-center justify-between w-full">
  //           <div className="flex items-center">
  //             <div className="flex-shrink-0 bg-green-500 rounded-md shadow-lg p-0.5">
  //               <Check className="h-4 w-4 text-white" />
  //             </div>
  //             <div className="ml-3">
  //               <p className="text-sm font-medium text-gray-900 mb-2">
  //                 Download Success!
  //               </p>
  //               <p className="text-xs text-gray-500">
  //                 Your Image Ad has been downloaded as {extension.toUpperCase()}
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     ));
  //   } catch (error) {
  //     console.error("Error downloading image:", error);
  //   } finally {
  //     setIsDownloading(false);
  //   }
  // };

  const downloadImage = async () => {
    if (!imageUrl || isDownloading) return;
    setIsDownloading(true);

    try {
      // Fetch the image
      const response = await fetch(imageUrl);
      const blob = await response.blob();

      // Create a new blob URL for each download
      const blobUrl = URL.createObjectURL(blob);

      // Create and use download link
      const link = document.createElement("a");
      link.href = blobUrl;
      link.setAttribute("download", `${imageName}.jpg`);

      // We can use click() directly without appending to the body
      link.click();

      // Clean up the URL object after a short delay to ensure the download starts
      setTimeout(() => {
        URL.revokeObjectURL(blobUrl);
      }, 100);

      toast.custom(() => (
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg pointer-events-auto flex items-center p-4">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-green-500 rounded-md shadow-lg p-0.5">
                <Check className="h-4 w-4 text-white" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900 mb-2">
                  Download Success!
                </p>
                <p className="text-xs text-gray-500">
                  Your Image Ad has been downloaded
                </p>
              </div>
            </div>
          </div>
        </div>
      ));
    } catch (error) {
      console.error("Error downloading image:", error);
      toast.error("Failed to download image");
    } finally {
      setIsDownloading(false);
      setIsOpen(false);
    }
  };
  // Handle clicks outside the dropdown to close it
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // const handleCopyClick = async () => {
  //   if (handleCopy) {
  //     await handleCopy();
  //     toast.custom(() => (
  //       <div className="max-w-md w-full bg-white rounded-lg shadow-lg pointer-events-auto flex items-center p-4">
  //         <div className="flex items-center justify-between w-full">
  //           <div className="flex items-center">
  //             <div className="flex-shrink-0 bg-green-500 rounded-md shadow-lg p-0.5">
  //               <Check className="h-4 w-4 text-white" />
  //             </div>
  //             <div className="ml-3">
  //               <p className="text-sm font-medium text-gray-900 mb-2">
  //                 Copied to clipboard!
  //               </p>
  //               <p className="text-xs text-gray-500">
  //                 Your link will allow users to view your image.
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     ));
  //   }
  // };

  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center w-full py-3">
        <button
          onClick={handleBack}
          className="flex items-center text-[#650065] hover:text-gray-800 cursor-pointer p-0"
          type="button"
        >
          <ArrowLeft className="w-6 h-6 mr-2" />
          <span className="hidden md:block text-[#650065] font-medium text-base leading-6">
            Back
          </span>
        </button>

        {/* Vertical line - desktop only */}
        {/* <div className=" w-px h-8 bg-gray-200"></div> */}

        {/* Generate New Ad button - hidden on mobile */}
        {/* <Link href={"/signin"}>
          <button
            onClick={handleGenerateNewAd}
            disabled={isLoading}
            className={`flex items-center font-medium cursor-pointer ${
              isLoading
                ? "text-[#D19AD1] cursor-not-allowed"
                : "text-[#650065] hover:text-[#650065]"
            }`}
            type="button"
          >
            <span className="hidden md:block">
              {isLoading ? "Generating..." : "Generate Your Ad"}
            </span>
            <RotateCw className="w-5 h-5 ml-2" />
          </button>
        </Link> */}

        {/* Vertical line - desktop only */}
        {/* {imageUrl && <div className="w-px h-8 bg-gray-200"></div>} */}
        {/* 
        <button
          onClick={handleGoHome}
          className="flex items-center text-[#650065] hover:text-gray-800 cursor-pointer"
          type="button"
        >
          <House className="w-6 h-6 mr-2" />
          <span className="hidden md:block font-medium text-base leading-6">
            Go back Home
          </span>
        </button> */}

        {/* Vertical line - desktop only */}
        {/* <div className=" w-px h-8 bg-gray-200"></div> */}

        {/* UNCOMMENT THIS FOR V1.2  AND REMOVE THE ESLINT RULE IN THE LINE 1 */}
        {/* <DownloadButton
          imageUrl={imageUrl}
          downloadImage={downloadImage}
          isDownloading={isDownloading}
          isLoading={isLoading}
        /> */}
        <div className="flex gap-4">
          <button className="bg-[#F6F6F6] text-dark py-1.5 px-4 rounded cursor-pointer flex gap-2 items-center justify-center">
            <span className="max-sm:hidden">Save</span>
            <ChevronDown />
          </button>
          <button
            onClick={downloadImage}
            disabled={isDownloading || isLoading}
            className="bg-[#EEF4FC] text-[#10509A] py-1.5 px-4 rounded cursor-pointer flex gap-2 items-center justify-center"
          >
            <Download />
            <span className="max-sm:hidden">Export</span>
          </button>
        </div>
        {/* <button onClick={hancleGet}>Cppy Link</button> */}
        {/* <div>
          

          <button
            onClick={handleCopyClick}
            className="bg-transparent border border-light-purple cursor-pointer text-black px-6 py-2 mb-6 rounded-sm hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 w-fit mx-auto"
          >
            Copy Link
          </button>
        </div> */}
      </div>

      {/* Horizontal line underneath the entire navigation */}
      {/* <div className="h-[1px] bg-gray-200 w-full mt-8"></div> */}
    </div>
  );
};

// const hancleGet(){

// }
