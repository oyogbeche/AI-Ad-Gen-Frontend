"use client";
import HeroMarketing from "@/domains/external/components/heromarketing";
import CreateAds from "@/domains/external/components/create-ads";
import FeaturesSection from "@/domains/external/components/key-features";
import { FAQ } from "@/domains/external/components/faq";
import CreateAd from "@/domains/external/components/create-ad";
import Cta from "@/domains/external/components/cta";
import VideoPlayer from "@/domains/external/components/video-player";

export default function MarketingPage() {
<<<<<<< HEAD
  return (
    <div>
      <HeroMarketing />
      <FeaturesSection />
=======
  const videoLink = "https://www.youtube.com/embed/_qKV8awfIfQ";
  https: return (
    <div>
      <HeroMarketing />
      <FeaturesSection />
      <div className="px-4">
        <VideoPlayer videoLink={videoLink} />
      </div>
>>>>>>> 46592e4dfe5d427d1dcff9b7c92f5a519c1a6993
      <CreateAds />
      <CreateAd />
      <FAQ />
      <Cta />
    </div>
  );
}
