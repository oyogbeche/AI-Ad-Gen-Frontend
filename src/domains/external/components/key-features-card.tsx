import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Nunito } from "next/font/google";

interface Feature {
  title: string;
  description: string;
}
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const featuresData: Feature[] = [
  {
    title: "Small Businesses",
    description: "Easily create professional ads without any deisign skills.",
  },
  {
    title: "Marketers & Advertisers",
    description: "Launch campaigns faster with AI- generated ad creatives.",
  },
  {
    title: "Creators & Influencers",
    description: "Promote products and brands with instant ad generation.",
  },
];

const FeatureCard = () => {
  return (
    <div
      className={`flex flex-col md:flex-row font-${nunito.variable}  gap-4 bg-white w-full lg:max-w-[1168px]`}
    >
      {featuresData.map((feature, index) => (
        <Card
          key={index}
          className="px-10 py-8 rounded-2xl border border-[#EBECED] bg-[#F8FAFB] flex flex-col gap-2 p-[32px_40px] w-full flex-[1]"
        >
          <CardHeader className="p-0">
            <CardTitle className="text-[#121316] p-0 text-[24px] font-bold leading-normal">
              <h3> {feature.title}</h3>
            </CardTitle>
          </CardHeader>
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
