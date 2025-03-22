"use client";
import HeroMarketing from "@/domains/external/components/heromarketing";
import CreateAds from "@/domains/external/components/create-ads";
import FeaturesSection from "@/domains/external/components/key-features";
import { FAQ } from "@/domains/external/components/faq";
import CreateAd from "@/domains/external/components/create-ad";
import Cta from "@/domains/external/components/cta";
import VideoPlayer from "@/domains/external/components/video-player";

export default function MarketingPage() {
  const videoLink = "https://www.youtube.com/embed/_qKV8awfIfQ";
  return (
    <div>
      <HeroMarketing />
      <FeaturesSection />
      <div className="px-4">
        <VideoPlayer videoLink={videoLink} />
      </div>
      <CreateAds />
      <CreateAd />
      <FAQ />
      <Cta />
    </div>
  );
}
