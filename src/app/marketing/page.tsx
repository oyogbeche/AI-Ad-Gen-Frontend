"use client"
import HeroMarketing from "@/domains/external/components/heromarketing";
import CreateAds from "@/domains/external/components/create-ads";
import { FAQ } from "@/domains/external/components/faq";
import CreateAd from "@/domains/external/components/create-ad";


export default function MarketingPage() { 
  return ( 
    <div> 
       
      <HeroMarketing />
      <CreateAds /> 
      <CreateAd />
      <FAQ /> 
      
    </div> 
  ); 
}
