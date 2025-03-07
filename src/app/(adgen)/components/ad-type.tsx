"use client";
import BackButton from "@/components/back-button";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const AdType = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedAdType, setSelectedAdType] = useState<string | null>(
    searchParams.get("type") || null
  );

  const handleAdTypeSelect = (type: string) => {
    if (type === "image") {
      setSelectedAdType(type);
    }
  };

  const handleContinue = () => {
    if (selectedAdType) {
      console.log(`Selected ad type: ${selectedAdType}`);
      router.push(`/create-ad/ad-form?type=${selectedAdType}`);
    }
  };

  return (
    <section className="h-screen flex items-center justify-center overflow-hidden ">
      <div
        className={`w-full bg-[#F9FAFB] flex flex-col justify-center items-center max-md:px-6 max-md:py-8 overflow-hidden`}
      >
        <div className="w-full max-w-lg md:max-w-3xl bg-white border rounded-[8px] px-4 py-8 md:px-10 md:pb-11 overflow-auto max-h-[90vh]">
          <BackButton />
          <h2 className="text-[28px] leading-[36px] md:text-2xl text-[#121316] font-semibold md:text-center mb-6 md:mb-8 -mt:2 md:mt-16">
            Select Ad Type
          </h2>

          <div className="flex justify-center items-center gap-6 mb-8 md:mb-16">
            <div
              className={` border-[1.25px] max-w-[371px] w-full px-6 py-8 rounded-lg cursor-pointer transition-all flex justify-between  ${
                selectedAdType === "image"
                  ? "border-[#B7D3F3] bg-[#F3F8FD]"
                  : "border-[#ECECEC] hover:border-[#B7D3F3]"
              }`}
              onClick={() => handleAdTypeSelect("image")}
            >
              <div className="flex flex-col gap-8 items-start justify-center ">
                <div
                  className={`p-2.5 h-12 w-12 flex items-center justify-center ${
                    selectedAdType === "image" ? "bg-[#667185]" : "bg-[#E9EEF4]"
                  }
                  rounded-full`}
                >
                  {selectedAdType === "image" ? (
                    <Image
                      src="/selected-image-icon.svg"
                      alt="selected image svg"
                      className="max-w-full max-h-full object-contain"
                      quality={100}
                      width={28}
                      height={28}
                    />
                  ) : (
                    <Image
                      src="/image-icon.svg"
                      alt="image svg"
                      className="max-w-full max-h-full object-contain"
                      quality={100}
                      width={28}
                      height={28}
                    />
                  )}
                </div>

                <div>
                  <h3 className="font-semibold text-[20px] leading-7">
                    Image Ad
                  </h3>
                  <p className="text-base font-normal leading-6 max-w-[250px] text-[#5f5f5f]">
                    Static image ads for social media, websites, and print
                  </p>
                </div>
              </div>

              <div
                className={` ${
                  selectedAdType ? "h-fit" : ""
                } rounded-full border-2 flex items-center justify-center ${
                  selectedAdType === "image"
                    ? "border-[#458DE1] bg-[#458DE1] mt-4 md:mt-2"
                    : "border-[0.5px] border-[#667185] mt-4 md:mt-2 w-6 h-5 md:h-6"
                }`}
              >
                {selectedAdType === "image" && (
                  <Image
                    src="/check.svg"
                    alt="check svg"
                    className="md:w-6 md:h-6"
                    quality={100}
                    width={24}
                    height={24}
                  />
                )}
              </div>
            </div>
            {/* 
<div
  className={`border-1 w-[371px] p-6 rounded-lg cursor-pointer transition-all flex items-start justify-between ${
    selectedAdType === "image"
      ? "border-[#B800B8] bg-[#F3E8F3]"
      : "border-gray-300 hover:border-[#B800B8]/50"
  }`}
  onClick={() => handleAdTypeSelect("image")}
>
  <div className="flex flex-col items-start justify-center mb-4 ">
    <Image
      src="/image-icon.svg"
      alt="image svg"
      className="max-w-full max-h-full object-contain"
      quality={100}
      width={20}
      height={20}
    />
    <div className="mt-4">
      <h3 className="font-semibold text-base mb-1">Image Ad</h3>
      <p className="text-sm text-gray-600 max-w-[250px]">
        Static image ads for social media, websites, and print
      </p>
    </div>
  </div>

  <div
    className={`w-3 h-3 rounded-full border-2 flex items-center justify-center ${
      selectedAdType === "image"
        ? "border-[#B800B8] bg-[#B800B8]"
        : "border-gray-300"
    }`}
  >
    {selectedAdType === "image" && (
      <Image
        src="/check.svg"
        alt="image svg"
        className="max-w-full max-h-full object-contain"
        quality={100}
        width={20}
        height={20}
      />
    )}
  </div>
</div> */}

            {/*    <div className="border p-6 rounded-lg flex flex-col border-gray-300 bg-gray-100 opacity-50 cursor-not-allowed">
          <Image src="/video.svg" alt="Video svg" width={30} height={30} />
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <h3 className="font-semibold text-base">Video Ad</h3>
            <span className="text-xs bg-gray-300 text-gray-600 px-2 py-1 rounded-md ml-auto">
              Coming Soon
            </span>
          </div>
          <p className="text-sm text-gray-600">
            Animated ads with motion and sound.
          </p>
        </div> */}
          </div>

          <div className="w-full flex justify-center">
            <button
              className={`max-w-[371px] w-full text-center py-3 rounded-md transition-colors ${
                selectedAdType
                  ? "bg-[#B800B8] text-white hover:bg-[#960096] cursor-pointer "
                  : "bg-[#EAC8F0] text-white cursor-not-allowed"
              }`}
              disabled={!selectedAdType}
              onClick={handleContinue}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdType;
