"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ImageAdFormData } from "@/domains/ads-gen/types";
import { motion } from "framer-motion";
import { ArrowLeft, Check, ChevronDown, Download, Share2 } from "lucide-react";
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
  handleCopy,
  type,
}) => {
  const router = useRouter();
  const [isDownloading, setIsDownloading] = useState(false);
  const [isSaveDropdownOpen, setIsSaveDropdownOpen] = useState(false);
  const [isExportDropdownOpen, setIsExportDropdownOpen] = useState(false);
  const saveDropdownRef = useRef<HTMLDivElement>(null);
  const exportDropdownRef = useRef<HTMLDivElement>(null);
  const urlInputRef = useRef<HTMLInputElement>(null);

  const handleBack = () => {
    if (type == "demo") router.push("/generate-ad");
    else router.push("/dashboard/ad-form");
  };

  const downloadImage = async (format: "png" | "jpg") => {
    if (!imageUrl || isDownloading) return;
    setIsDownloading(true);

    try {
      const response = await fetch(imageUrl);
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

  const handleShareClick = async () => {
    if (handleCopy) {
      await handleCopy();

      // Focus and select the URL text for easy copying
      if (urlInputRef.current) {
        urlInputRef.current.select();
      }

      toast.custom(() => (
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg pointer-events-auto flex items-center p-4">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-green-500 rounded-md shadow-lg p-0.5">
                <Check className="h-4 w-4 text-white" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900 mb-2">
                  Copied to clipboard!
                </p>
                <p className="text-xs text-gray-500">
                  Your link will allow users to view your image.
                </p>
              </div>
            </div>
          </div>
        </div>
      ));
    }
  };

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
  };

  const handleSaveAndPublish = () => {
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
                Ad Published Successfully!
              </p>
              <p className="text-xs text-gray-500">
                Your ad is now live and ready to reach your audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    ));
  };

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

        <div className="flex gap-4">
          {type !== "demo" && (
            <>
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
                      <button
                        onClick={handleSaveAndExit}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                      >
                        Save & Exit
                      </button>
                      <button
                        onClick={handleSaveAndPublish}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                      >
                        Save & Publish
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>

              <Popover>
                <PopoverTrigger asChild>
                  <button className="bg-[#F8E6F8] py-1.5 px-4 rounded cursor-pointer flex gap-2 items-center justify-center">
                    <Share2 size={18} />
                    <span className="max-sm:hidden text-base leading-6 font-normal text-[#650065]">
                      Share
                    </span>
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-60 md:w-80">
                  <div className="py-2 flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                      <input
                        ref={urlInputRef}
                        type="text"
                        id="image-url"
                        value={`https://genz.ad/stand-alone/imageUrl`}
                        readOnly
                        className="w-full py-3 px-2 border border-[#E3E3E3] rounded-md text-sm focus:border-transparent"
                      />
                    </div>
                    <button
                      onClick={handleShareClick}
                      className="bg-light-purple cursor-pointer text-white px-6 py-3 rounded-sm hover:bg-dark-purple transition-colors flex items-center justify-center gap-2 w-full mx-auto"
                    >
                      Copy Link
                    </button>
                  </div>
                </PopoverContent>
              </Popover>
            </>
          )}

          <div className="relative" ref={exportDropdownRef}>
            <button
              onClick={() => setIsExportDropdownOpen(!isExportDropdownOpen)}
              disabled={isDownloading || isLoading}
              className="bg-[#EEF4FC] py-1.5 px-4 rounded cursor-pointer flex gap-2 items-center justify-center"
            >
              <Download size={18} />
              <span className="max-sm:hidden text-base leading-6 font-normal text-[#10509A]">
                Export
              </span>
              <ChevronDown size={18} />
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
        </div>
      </div>
    </div>
  );
};
