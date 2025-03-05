import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Nunito } from "next/font/google";

// Define the structure of a feature item
interface Feature {
  title: string;
  description: string;
}
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

// Data for the feature cards
const featuresData: Feature[] = [
  {
    title: "AI-powered Visuals",
    description:
      "Get automated image and video suggestions that fit your campaign.",
  },
  {
    title: "Analytics Insights",
    description: "AI analyzes your past campaigns to enhance future ads.",
  },
  {
    title: "Multi-Platform",
    description: "Download Ads in the perfect format for every platform.",
  },
];

// FeatureCard component that renders the feature cards
const FeatureCard = () => {
  return (
    <div
      className={`grid lg:grid-cols-3 grid-cols-1 font-${nunito.variable} gap-4 max-w-7xl bg-white mx-auto px-8`}
    >
      {/* Loop through featuresData to generate cards dynamically */}
      {featuresData.map((feature, index) => (
        <Card
          key={index}
          className="px-10 py-8 rounded-2xl border border-[#EBECED] bg-[#F8FAFB] flex flex-col items-start gap-2 p-[32px_40px] flex-[1_0_0]"
        >
          {/* Card Header containing the feature title */}
          <CardHeader className="p-0">
            <CardTitle className="text-[#121316] p-0 text-[24px] font-bold leading-normal">
              {feature.title}
            </CardTitle>
          </CardHeader>
          {/* Card Content containing the feature description */}
          <CardContent className="p-0">
            <CardDescription
              className={`${nunito.variable} text-[#787878] p-0 text-[16px] font-normal leading-[24px]`}
            >
              {feature.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FeatureCard;
