"use client";

import { ImageAdCard } from "@/app/(external)/(dashboard)/components/dashboard-hero";
import DashboardContent from "@/domains/ads-gen/components/dashboard-content";
export default function Dashboard() {
  return (
    <main className="container mx-auto px-6 py-4 md:py-8 max-w-[1316px]">
      <div>
        <ImageAdCard
          title="Generate Image Ad"
          description="Create high-quality, AI-powered image ads in seconds. Upload, customize, and generate visuals tailored for your audience"
          buttonText="Generate Ad"
          buttonHref="/dashboard/ad-form"
        />
      </div>

      <DashboardContent />
    </main>
  );
}
