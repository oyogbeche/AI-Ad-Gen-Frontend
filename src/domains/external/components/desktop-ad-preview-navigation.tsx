"use client";

import { ImageAdFormData } from "@/domains/ads-gen/types";
import { motion } from "framer-motion";
import { ArrowLeft, Check, ChevronDown, Download, Share2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { toast } from "sonner";
import ShareModal from "./share-modal";
import { patchRequest } from "@/lib/axios-fetch";
//import { useGenerateAdImage } from "@/domains/ads-gen/api/ad-image-generate";

interface DesktopAdPreviewNavigationProps {
  className?: string;
  isLoading?: boolean;
  onGenerateNewAd?: (data: ImageAdFormData) => void;
  imageUrl?: string | null;
  imageName?: string;
  handleCopy?: () => Promise<void>;
  type: string;
  status?: string;
  generatedImageUrl?: string;
  downloadFunction?: () => void;
  imageId?: string;
  hideSaveButton?: boolean;
  hideSaveAndExit?: boolean;
  isPublished?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageAdData?: any;
}

export const DesktopAdPreviewNavigation: React.FC<
  DesktopAdPreviewNavigationProps
> = ({
  className = "",
  isLoading,
  imageUrl,
  imageName = "ad",
  // handleCopy,
  pageAdData,
  type,
  status,
  generatedImageUrl = "/preview.png",
  imageId,
  hideSaveButton = false,
  hideSaveAndExit = false,
  isPublished = false,
}) => {
  // console.log("DASHBOARD", pageAdData);
  const router = useRouter();
  const [isDownloading, setIsDownloading] = useState(false);
  const [isSaveDropdownOpen, setIsSaveDropdownOpen] = useState(false);
  const [isExportDropdownOpen, setIsExportDropdownOpen] = useState(false);
  // const [isCopying, setIsCopying] = useState(false);
  const saveDropdownRef = useRef<HTMLDivElement>(null);
  const exportDropdownRef = useRef<HTMLDivElement>(null);
  // const urlInputRef = useRef<HTMLInputElement>(null);

  // Use a fallback image URL when imageUrl is undefined or null
  const fallbackImageUrl = "d889a-153e-7e1f-8000-4dad23d69053";
  const effectiveImageUrl = imageUrl || fallbackImageUrl;

  // Fixed back button handler for all types
  const handleBack = () => {
    if (type === "demo") {
      router.push("/generate-ad");
    } else {
      localStorage.removeItem("adCustomizerData");
      router.push("/dashboard");
    }
  };

  const showSaveButton =
    !pageAdData?.author_info &&
    !hideSaveButton &&
    type === "image-form" &&
    status === "completed" &&
    (!hideSaveAndExit || !isPublished);

  // get generated image id
  //const { adData } = useGenerateAdImage();

  const downloadImage = async (format: "png" | "jpg") => {
    if (!effectiveImageUrl || isDownloading) return;
    setIsDownloading(true);

    try {
      const response = await fetch(imageUrl || fallbackImageUrl);

      const blob = await response.blob();

      const extension = format === "png" ? "png" : "jpg";
      const mimeType = `image/${extension === "png" ? "png" : "jpeg"}`;

      let imageBlob = blob;
      if (format === "png" && blob.type !== "image/png") {
        imageBlob = new Blob([blob], { type: mimeType });
      } else if (format === "jpg" && blob.type !== "image/jpeg") {
        imageBlob = new Blob([blob], { type: mimeType });
      }

      const blobUrl = URL.createObjectURL(imageBlob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.setAttribute("download", `${imageName}.${extension}`);
      link.click();

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
                  Your Image Ad has been downloaded as {extension.toUpperCase()}
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
      setIsExportDropdownOpen(false);
    }
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        saveDropdownRef.current &&
        !saveDropdownRef.current.contains(event.target as Node)
      ) {
        setIsSaveDropdownOpen(false);
      }

      if (
        exportDropdownRef.current &&
        !exportDropdownRef.current.contains(event.target as Node)
      ) {
        setIsExportDropdownOpen(false);
      }
    };

    if (isSaveDropdownOpen || isExportDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSaveDropdownOpen, isExportDropdownOpen]);

  // const handleShareClick = async () => {
  //   if (handleCopy) {
  //     try {
  //       await handleCopy();
  //     } catch (error) {
  //       console.error("Error in custom copy handler:", error);
  //     }
  //   }

  //   // Implement direct copy functionality as a fallback
  //   try {
  //     setIsCopying(true);
  //     const shareUrl = `https://genz.ad/stand-alone/${effectiveImageUrl}`;

  //     if (navigator.clipboard) {
  //       await navigator.clipboard.writeText(shareUrl);
  //     } else {
  //       // Fallback for browsers that don't support clipboard API
  //       if (urlInputRef.current) {
  //         urlInputRef.current.select();
  //         document.execCommand("copy");
  //       }
  //     }

  //     // Visual feedback animation
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
  //   } catch (error) {
  //     console.error("Error copying to clipboard:", error);
  //     toast.error("Failed to copy link");
  //   } finally {
  //     setIsCopying(false);
  //   }
  // };

  const handleSaveAndExit = () => {
    setIsSaveDropdownOpen(false);
    toast.custom(() => (
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg pointer-events-auto flex items-center p-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-green-500 rounded-md shadow-lg p-0.5">
              <Check className="h-4 w-4 text-white" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900 mb-2">
                Saved Successfully!
              </p>
            </div>
          </div>
        </div>
      </div>
    ));
    router.push("/dashboard");
  };

  const handleSaveAndPublish = async () => {
    try {
      // console.log("IMAGEID",imageId)
      const newStatus = pageAdData.is_published ? "unpublished" : "published";
      await patchRequest(`/image/publish/${imageId}`, { status: newStatus });

      toast.custom(() => (
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg pointer-events-auto flex items-center p-4">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-green-500 rounded-md shadow-lg p-0.5">
                <Check className="h-4 w-4 text-white" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900 mb-2">
                  {pageAdData.is_published
                    ? "Ad Unpublished Successfully!"
                    : "Ad Published Successfully!"}
                </p>
                <p className="text-xs text-gray-500">
                  {pageAdData.is_published
                    ? "Your ad is no longer live."
                    : "Your ad is now live and ready to reach your audience."}
                </p>
              </div>
            </div>
          </div>
        </div>
      ));

      // router.push("/dashboard");
    } catch (error) {
      console.error("Error updating publish status:", error);
      toast.custom(() => (
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg pointer-events-auto flex items-center p-4">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-green-500 rounded-md shadow-lg p-0.5">
                <Check className="h-4 w-4 text-white" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900 mb-2">
                  {pageAdData.is_published
                    ? "Ad Unpublished Successfully!"
                    : "Ad Published Successfully!"}
                </p>
                <p className="text-xs text-gray-500">
                  {pageAdData.is_published
                    ? "Your ad is no longer live."
                    : "Your ad is now live and ready to reach your audience."}
                </p>
              </div>
            </div>
          </div>
        </div>
      ));
    }
    router.push("/dashboard");
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center w-full pt-3">
        <button
          onClick={handleBack}
          className="flex items-center text-[#650065] hover:text-gray-800 cursor-pointer p-0"
          type="button"
        >
          <ArrowLeft className="size-5 mr-2 text-[#650065]" />
          <span className="hidden md:block text-[#650065] font-medium text-base leading-6">
            Back
          </span>
        </button>

        <div className="flex gap-4">
          {/* Save button - Show only when type is image-form and status is completed */}
          {showSaveButton && (
            <div className="relative" ref={saveDropdownRef}>
              <button
                onClick={() => setIsSaveDropdownOpen(!isSaveDropdownOpen)}
                className="bg-[#F6F6F6] py-1.5 px-4 rounded cursor-pointer flex gap-2 items-center justify-center"
              >
                <span className="max-sm:hidden text-base leading-6 font-normal text-[#1B1B1B]">
                  Save
                </span>
                <ChevronDown size={18} />
              </button>

              {isSaveDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10"
                >
                  <div className="py-1">
                    {!hideSaveAndExit && (
                      <button
                        onClick={handleSaveAndExit}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                      >
                        Save & Exit
                      </button>
                    )}
                    {!isPublished && (
                      <button
                        onClick={handleSaveAndPublish}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                      >
                        {pageAdData.is_published
                          ? "Unpublish"
                          : "Save & Publish"}
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
            </div>
          )}

          {/* Share button - Show only when type is image-form and status is completed */}
          {type === "image-form" && status === "completed" && (
            <ShareModal
              adUrl={`https://genz.ad/stand-alone/${imageId}`}
              // Added image url for when we want to switch to sharing natively and not the link to the social
              // media platforms using Web Share API
              imageUrl={generatedImageUrl}
              defaultOpen={false}
            >
              {/* Custom Share Button */}
              <button className="bg-[#F8E6F8] py-1.5 px-4 rounded cursor-pointer flex gap-2 items-center justify-center">
                <Share2 size={18} />
                <span className="max-sm:hidden text-base leading-6 font-normal text-[#650065]">
                  Share
                </span>
              </button>
            </ShareModal>
          )}

          {/* Export button - Show for demo type always, and for image-form only when status is completed */}
          {(type === "demo" ||
            (type === "image-form" && status === "completed")) && (
            <div className="relative" ref={exportDropdownRef}>
              <button
                disabled={isDownloading || isLoading}
                className="bg-[#EEF4FC] py-1.5 px-4 rounded cursor-pointer flex gap-2 items-center justify-center"
                onClick={() => setIsExportDropdownOpen(!isExportDropdownOpen)}
              >
                <Download size={18} color="#10509A" />
                <span className="max-sm:hidden text-base leading-6 font-normal text-[#10509A]">
                  Export
                </span>
              </button>

              {isExportDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10"
                >
                  <div className="py-1">
                    <button
                      // onClick={() => downloadImage("png")}
                      onClick={() => downloadImage("png")}
                      disabled={isDownloading || isLoading}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    >
                      Download as PNG
                    </button>
                    <button
                      onClick={() => downloadImage("jpg")}
                      disabled={isDownloading || isLoading}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    >
                      Download as JPG
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
