import CtaHowItWorks from "@/domains/other-externals/community-cta";
import CreateAds from "@/domains/other-externals/components/communityad";
import CommunityHero from "@/domains/other-externals/components/join-community";
import Image from "next/image";
import React from "react";

const Community = () => {
  return (
    <div className="bg-gradient-to-b from-[#F9F9F9] to-white to-24.5  md:px-5 flex flex-col gap-6">
      <CommunityHero />
      <div className="max-w-7xl w-full xl:mx-auto max-lg:px-4 pt-8 flex flex-col gap-6 lg:gap-14">
        <div className="relative w-full aspect-square h-[200px] md:h-[500px] lg:h-[600px]">
          <Image
            src="/communityimg.svg"
            alt="community"
            fill
            priority
            className="xl:object-cover object-contain w-full h-full"
          />
        </div>
        <CreateAds />
        <CtaHowItWorks />
      </div>
    </div>
  );
};

export default Community;
