"use client";

import { ImageAdCard } from "@/app/(external)/(dashboard)/components/dashboard-hero";
import DashboardContent from "@/domains/ads-gen/components/dashboard-content";
import Image from "next/image";
export default function Dashboard() {
  const empty = false;

  return (
    <main className="container mx-auto px-6 py-4 md:py-8 max-w-[1316px]">
      <div>
        <ImageAdCard
          title="Generate Image Ad"
          description="Create high-quality, AI-powered image ads in seconds. Upload, customize, and generate visuals tailored for your audience"
          buttonText="Try it now"
          buttonHref="/dashboard/ad-form"
        />
      </div>

      {empty ? (
        <div className="flex flex-col items-center gap-4 mt-[140px]">
          <Image
            src="/get-started.png"
            width={401}
            height={333}
            alt="Let's get started."
          />
        </div>
      ) : (
        <DashboardContent />
      )}
    </main>
  );
}
