import FeaturesSection from "@/app/sections/key-features";
import HeroSection from "@/app/sections/hero";
import Pricing from "./sections/pricing";
import CreateAds from "./sections/create-ads";
import FAQ from "@/app/sections/FAQ";
import CreateAd from "@/app/sections/createAD"; 
import NewsletterForm from "./sections/news-letter";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <CreateAds />
      <CreateAd /> 
      <Pricing />
      <FAQ />
      <NewsletterForm />
    
    </main>
  );
}
