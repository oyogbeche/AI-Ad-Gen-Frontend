"use client"
import Hero2 from "@/domains/external/components/heromarketing2";
import CreateAds from "@/domains/external/components/create-ads";
import { FAQ } from "@/domains/external/components/faq";
import CreateAd from "@/domains/external/components/create-ad";
import Cta from "@/domains/external/components/cta";
import FeaturesSection from "@/domains/external/components/key-features";
import VideoPlayer from "@/domains/external/components/video-player";


export default function Page() { 
     const videoLink = "https://www.youtube.com/embed/szWGvpaQkVk"; 
  return ( 
    <div> 
      <Hero2 />
    <VideoPlayer videoLink={videoLink} />
      <FeaturesSection />
      <CreateAds /> 
      <CreateAd />
      <FAQ /> 
      <Cta />
    </div> 
  ); 
}
