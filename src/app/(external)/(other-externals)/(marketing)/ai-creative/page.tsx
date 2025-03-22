"use client";
import HeroMarketing from "@/domains/external/components/heromarketing";
import CreateAds from "@/domains/external/components/create-ads";
import FeaturesSection from "@/domains/external/components/key-features";
import { FAQ } from "@/domains/external/components/faq";
import CreateAd from "@/domains/external/components/create-ad";
import Cta from "@/domains/external/components/cta";

export default function MarketingPage() {
  return (
    <div>
      <HeroMarketing />
      <FeaturesSection />
      <CreateAds />
      <CreateAd />
      <FAQ />
      <Cta />
    </div>
  );
}
