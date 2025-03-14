"use client";

import { Button } from "@/components/ui/button";
import { useImageContext } from "@/domains/ads-gen/context/ImageContext";
import { DesktopAdPreviewNavigation } from "@/domains/external/components/desktop-ad-preview-navigation";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const Page = () => {
  const { imageUrl, promptData, setImageUrl, setPromptData } =
    useImageContext();
  const [isLoaded, setIsLoaded] = useState(false);
  const details = promptData ? JSON.parse(promptData) : {};

  useEffect(() => {
    const storedImageUrl = localStorage.getItem("imageUrl");
    const storedPromptData = localStorage.getItem("promptData");
    if (storedImageUrl) setImageUrl(storedImageUrl);
    if (storedPromptData) setPromptData(storedPromptData);
    setIsLoaded(true);
  }, [setImageUrl, setPromptData]);

  if (!isLoaded) {
    return null;
  }

  return (
    <div>
      <div className="">
        <div className="w-full mx-auto flex flex-col gap-6 max-sm:p-6">
          {/* <div className="px-6">
            <DesktopAdPreviewNavigation imageUrl={imageUrl} type="demo" />
          </div> */}

          <div className="w-full rounded-[8px] overflow-hidden flex-col-reverse sm:flex-row flex border border-[#F2F2F2] max-sm:bg-white">
            <div className="bg-white p-[24px]">
              <h1 className="text-[#2A2A2A] text-[24px] leading-[32px] font-[500] mb-10">
                Customize Your Ad
              </h1>
              <div className="text-[#121316] text-base font-medium leading-6 mb-3">
                <p>Ad Prompt</p>
              </div>

              <div className="bg-[#FCFCFC] border border-[#E4E7EC] p-4 text-[18px] font-medium leading-7  text-[#7D7D7D] rounded-[9px]">
                <p className="max-w-[362px]">{details.text}</p>
              </div>

              <Button className="mt-3 bg-light-purple cursor-pointer text-white px-6 py-5 rounded-sm hover:bg-dark-purple transition-colors flex items-center justify-center gap-2 w-full mx-auto">
                <p>Generate Your Ad</p> <ArrowRight />
              </Button>
            </div>

            <div className="flex flex-col gap-6 justify-self-stretch w-full pb-6">
              <DesktopAdPreviewNavigation
                className="w-full px-5 mt-3"
                imageUrl={imageUrl}
                type="demo"
              />
              {/* <div className="p-[12px] flex items-center justify-between w-full bg-white sm:border-l">
                <button className="flex items-center justify-center gap-2">
                  <ArrowLeft />
                  <span className="max-sm:hidden">Back</span>
                </button>
                <button
                  onClick={async () => {
                    try {
                      if (imageUrl) {
                        const response = await fetch(imageUrl);
                        const blob = await response.blob();
                        const blobUrl = URL.createObjectURL(blob);

                        const link = document.createElement("a");
                        link.href = blobUrl;
                        link.setAttribute("download", "downloaded-image.jpg"); // Filename
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                        URL.revokeObjectURL(blobUrl); // Cleanup
                      } else {
                        console.error("Image URL is null");
                      }
                    } catch (error) {
                      console.error("Error downloading image:", error);
                    }
                  }}
                  className="bg-[#EEF4FC] text-[#10509A] py-1.5 px-4 rounded cursor-pointer flex gap-2 items-center justify-center"
                >
                  <Download />
                  <span className="max-sm:hidden">Export</span>
                </button>
              </div> */}
              <div className="bg-[#F0F3F5] p-6 sm:p-[32px] lg:min-w-[598px] max-w-[598px] self-center overflow-hidden">
                <Image
                  className="rounded-[8px] w-full h-auto object-cover"
                  src={imageUrl || "/progressImage.png"}
                  height={598}
                  width={395}
                  alt={"Progress Image"}
                  priority
                  unoptimized
                />
              </div>

              {/* <div className="grid grid-cols-2 gap-4 ">
                <div className="flex flex-col gap-1 font-normal text-base leading-6 py-1">
                  <h4 className="text-[#121316] ">Product Name</h4>
                  <p className="text-[#5F5F5F]">{details.productName}</p>
                </div>
                <div className="flex flex-col gap-1 font-normal text-base leading-6 py-1">
                  <h4 className="text-[#121316] ">Aspect Ratio</h4>
                  <p className="text-[#5F5F5F]">{details.aspectRatio}</p>
                </div>
                <div className="flex flex-col gap-1 font-normal text-base leading-6 py-1">
                  <h4 className="text-[#121316] ">Language</h4>
                  <p className="text-[#5F5F5F]">{details.language}</p>
                </div>
                <div className="flex flex-col gap-1 font-normal text-base leading-6 py-1">
                  <h4 className="text-[#121316] ">Resolution</h4>
                  <p className="text-[#5F5F5F]">{details.resolution}</p>
                </div>
                <div className="flex flex-col gap-1 font-normal text-base leading-6 py-1">
                  <h4 className="text-[#121316] ">Target Audience</h4>
                  <p className="text-[#5F5F5F]">{details.targetAudience}</p>
                </div>
                <div className="flex flex-col gap-1 font-normal text-base leading-6 py-1">
                  <h4 className="text-[#121316] ">Region</h4>
                  <p className="text-[#5F5F5F]">{details.region}</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
