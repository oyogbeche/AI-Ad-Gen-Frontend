"use client";
import FeaturesSection from "@/domains/external/components/key-features";
import HeroSection from "@/domains/external/components/hero";
import CreateAds from "@/domains/external/components/create-ads";
import { FAQ } from "@/domains/external/components/faq";
import CreateAd from "@/domains/external/components/create-ad";
import Cta from "../../../domains/external/components/cta";
import { useEffect } from "react";
import Testimonials from "@/domains/external/components/testimonials";

export default function Home() {
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
      <Testimonials />
      <FAQ />
      <Cta />
    </main>
  );
}
