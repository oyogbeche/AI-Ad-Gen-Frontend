import type React from "react";
import PricingCard from "@/components/pricing-card";

export default function Pricing() {
  return (
    <section className="xl:p-20 py-10 bg-white">
      <div className="w-full relative max-w-7xl lg:py-15 px-7 xl:px-15 py-10 mx-auto lg:rounded-[14px] bg-[#1E1E1E]">
        <div className="w-fit mx-auto flex flex-col">
          <div className="text-[#F9F] text-center text-[16px] font-semibold leading-[32px]">
            UNLOCK THE FULL POTENTIAL OF AI-ADGEN
          </div>
          <div className="flex flex-col items-center gap-[3px]">
            <h2 className="text-3xl md:text-4xl text-white text-center text-[40px] font-semibold leading-[48px]">
              Pricing Plans
            </h2>
            <p className="text-white text-[18px] font-medium max-w-[300px] text-center leading-[28px]">
              Generate your ads for free and pay as you grow.
            </p>
          </div>
        </div>

        <PricingCard />
      </div>
    </section>
  );
}
