"use client";
import { useAdsContext } from "@/domains/ads-gen/context/AdsContext";
import { DesktopAdPreviewNavigation } from "@/domains/external/components/desktop-ad-preview-navigation";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const AddDetails = () => {
  const searchParams = useSearchParams();
  const [, setCopyStatus] = useState("");
  const filter = searchParams.get("type");
  const id = searchParams.get("id");

  const { adData } = useAdsContext();

  if (filter !== "user" && filter !== "community") {
    return <p className="text-red-500">Error: Invalid ad type</p>;
  }
  if (!filter || !id || !adData[filter]) {
    return <p className="text-red-500">Error: Invalid ad data</p>;
  }

  const adIndex = Number(id);

  if (isNaN(adIndex) || adIndex < 0 || adIndex >= adData[filter].length) {
    return <p className="text-red-500">Error: Ad not found</p>;
  }

  const pageAdData = adData[filter][adIndex];
  const handleCopy = async () => {
    const copiedLink = `https://genz.ad/stand-alone/${pageAdData}`;

    try {
      await navigator.clipboard.writeText(copiedLink);
      setCopyStatus("Copied");
    } catch (error) {
      setCopyStatus(String(error));
    }
  };

  return (
    <main className="mx-auto px-6 max-w-[1316px] flex flex-col-reverse lg:flex-row ">
      <section className="w-full lg:flex-[3] flex flex-col gap-10 bg-white p-[16px_20px] lg:p-[24px_40px] ">
        <div className="flex justify-between items-center">
          <h1 className="text-[28px] font-semibold">{"Title"}</h1>
          <button className="h-9 p-[6px_25px] text-[#092F5B] border border-[#B7D3F3] bg-[#E8F1FB] rounded-[40px]">
            Image
          </button>
        </div>
        <div>
          <div className="flex justify-between items-center mb-3">
            <span>Ad Prompt</span>
            <Image
              src="/copy-icon.svg"
              height={20}
              width={20}
              alt="copy icon"
            />
          </div>
          <p className="text-[18px] text-[#7D7D7D] font-semibold p-4 rounded-[9px] border border-[#E4E7EC] bg-[#FCFCFC]">
            {pageAdData.prompt}
          </p>
        </div>
        <div>
          <p className="text-[#121316]">Product Name</p>
          <span className="text-[#5F5F5F] font-medium">{"Title"}</span>
        </div>
        <div>
          <p className="text-[#121316]">Ad Size & Format</p>
          <span className="text-[#5F5F5F] font-medium">{"Facebook"}</span>
        </div>
        <div>
          <p className="text-[#121316]">Target Audience</p>
          <span className="text-[#5F5F5F] font-medium">
            {pageAdData.target_audience}
          </span>
        </div>
        <div>
          <p className="text-[#121316]">Date created</p>
          <span className="text-[#5F5F5F] font-medium">
            {pageAdData.created_at}
          </span>
        </div>
      </section>

      <section className="w-full md:flex-[7] bg-[#F9FAFB] flex flex-col items-center p-[16px_20px] lg:p-[24px_40px]">
        <DesktopAdPreviewNavigation
          imageUrl={pageAdData.image_url}
          handleCopy={handleCopy}
          status="completed"
          type="image-form"
        />
        <picture className="md:mt-10 py-3 bg-[#F0F3F5] md:p-17 w-full md:w-[90%] flex items-center justify-center">
          <Image
            src={pageAdData.image_url}
            height={310}
            width={335}
            alt={"ad Image"}
            className="w-full h-auto"
          />
        </picture>
      </section>
    </main>
  );
};

export default AddDetails;
