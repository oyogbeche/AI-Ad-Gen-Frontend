"use client";
import FeaturesSection from "@/app/sections/key-features";
import HeroSection from "@/app/sections/hero";
// import Pricing from "../sections/pricing";
import CreateAds from "../sections/create-ads";
import FAQ from "@/app/sections/FAQ";
import CreateAd from "@/app/sections/createAD";
import { useEffect } from "react";
// import NewsletterForm from "../sections/news-letter";

export default function Home() {
  useEffect(() => {
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
      {/* <Pricing /> */}
      <FAQ />
      {/* <NewsletterForm /> */}
    </main>
  );
}
