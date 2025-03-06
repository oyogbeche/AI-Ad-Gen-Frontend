import FeaturesSection from "@/app/(landing)/sections/key-features";
import HeroSection from "@/app/(landing)/sections/hero";
import Pricing from "./sections/pricing";
import CreateAds from "./sections/create-ads";
import FAQ from "@/app/(landing)/sections/FAQ";
import CreateAd from "@/app/(landing)/sections/createAD"; 
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
