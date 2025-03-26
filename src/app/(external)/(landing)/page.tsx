"use client";
import CreateAd from "@/domains/external/components/create-ad";
import CreateAds from "@/domains/external/components/create-ads";
import { FAQ } from "@/domains/external/components/faq";
import Gallery from "@/domains/external/components/gallery";
import HeroSection from "@/domains/external/components/hero";
import FeaturesSection from "@/domains/external/components/key-features";
import VideoPlayer from "@/domains/external/components/video-player";
import { useEffect } from "react";
import Cta from "../../../domains/external/components/cta";

export default function Home() {
  const videoLink = "https://www.youtube.com/embed/3ucnHvmNYpQ";
  https: useEffect(() => {
    // Check if we navigated back to the homepage
    if (sessionStorage.getItem("navigatingBack") === "true") {
      // Clear the flag
      sessionStorage.removeItem("navigatingBack");
      // Clear the image data
      localStorage.removeItem("imageAdData");
    }
  }, []);
  return (
    <main className="max-w-[1440px] m-auto">
      <HeroSection />
      <FeaturesSection />
      <CreateAds />
      <CreateAd />
      <div className="bg-[#F8E6F8] w-full px-6 py-10 lg:px-22 lg:py-20">
        <VideoPlayer videoLink={videoLink} />
      </div>
      <Gallery />
      <FAQ />
      <Cta />
    </main>
  );
}
