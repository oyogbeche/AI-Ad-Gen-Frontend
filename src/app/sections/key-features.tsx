import type React from "react";
import { Nunito } from "next/font/google";
import clsx from "clsx";
import FeatureCard from "@/components/key-features-card";
import {
  AiAnalytics,
  AiAnalytics2,
  GeneratedVisual,
} from "@/components/icons/icon";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});
const tagData = [
  {
    icon: <GeneratedVisual />,
    text: "Generated Visuals",
    textColor: "[#00A05E;]",
  },
  {
    icon: <AiAnalytics />,
    text: "AI Analytics",
    textColor: "[#FF3F56]",
  },
  {
    icon: <AiAnalytics2 />,
    text: "AI Analytics",
    textColor: "[#FF3F56]",
  },
];
export default function FeaturesSection() {
  return (
    <section
      className={clsx(
        "w-full px-1 md:px-6  bg-white flex flex-col items-center justify-end gap-10 lg:px-16 py-20",
        nunito.variable
      )}
    >
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col items-center justify-center  gap-3 max-w-4xl mx-auto">
          <h1 className="text-[#121316] text-3xl lg:text-[40px] text-center font-medium leading-[48px]">
            Powerful AI Features to Supercharge Your Ads
          </h1>
          <Tags />
        </div>
      </div>
      <FeatureCard />
    </section>
  );
}
const Tags = () => {
  return (
    <div className="flex gap-4">
      {tagData.map((tag, index) => (
        <div
          key={index}
          className={`md:flex-row flex flex-col items-center gap-2  text-${tag.textColor}`}
        >
          {tag.icon}
          <span className=" text-md lg:text-[25.695px] text-nowrap font-normal leading-[34.26px]">
            {tag.text}
          </span>
        </div>
      ))}
    </div>
  );
};
