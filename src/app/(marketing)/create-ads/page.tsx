"use client";
import CreateAd from "@/domains/external/components/create-ad";
import CreateAds from "@/domains/external/components/create-ads";
import Cta from "@/domains/external/components/cta";
import { FAQ } from "@/domains/external/components/faq";
import Hero2 from "@/domains/external/components/heromarketing2";
import FeaturesSection from "@/domains/external/components/key-features";

export default function MarketingPage() {
  return (
    <div>
      <Hero2 />
      <FeaturesSection />
      <CreateAds />
      <CreateAd />
      <FAQ />
      <Cta />
    </div>
  );
}
