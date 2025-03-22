"use client";
import CreateAds from "@/domains/external/components/create-ads";
import CreateAd from "@/domains/external/components/create-ad";
import Cta from "@/domains/external/components/cta";
import { FAQ } from "@/domains/external/components/faq";
import Hero2 from "@/domains/external/components/heromarketing2";
import FeaturesSection from "@/domains/external/components/key-features";
import VideoPlayer from "@/domains/external/components/video-player";

export default function MarketingPage() {
  const videoLink = "https://www.youtube.com/embed/3ucnHvmNYpQ";
  return (
    <div>
      <Hero2 />
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
