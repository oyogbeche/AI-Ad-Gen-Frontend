import type React from "react";
import { Nunito } from "next/font/google";
import clsx from "clsx";
import PricingCard from "@/components/pricing-card";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export default function Pricing() {
  return (
    <section className={"w-full xl:px-34 lg:py-25 px-4 py-10 md:px-6 bg-black"}>
      <div className="max-w-7xl mx-auto  relative">
        <div className="w-fit mx-auto flex flex-col">
          <div className="inline-block bg-[#eaf1fb] self-center text-[#458de1] px-6 py-2 rounded-2xl mb-6 font-semibold relative z-20">
            UNLOCK THE FULL POTENTIAL OF AI-ADGEN
          </div>
          <div className="flex flex-col items-center gap-[3px]">
            <h2 className="text-3xl md:text-4xl text-white text-center text-[40px] font-semibold leading-[48px]">
              Pricing Plans
            </h2>
            <p className="text-white text-[18px] font-medium leading-[28px]">
              Generate your ads for free and pay as you grow.
            </p>
          </div>
        </div>

        <PricingCard />
      </div>
    </section>
  );
}
