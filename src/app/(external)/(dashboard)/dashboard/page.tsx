"use client";

import { ImageAdCard } from "@/app/(external)/(dashboard)/components/dashboard-hero"
import { useAuthStore } from "@/store/auth-store";
import Image from "next/image"

export default function Home() {
const user = useAuthStore((state) => state.user);

console.log(user);

  return (
    <main className="container mx-auto px-6 py-4 md:py-8">
      <div className="mb-[140px]">
        <ImageAdCard
          title="Generate Image Ad"
          description="Create high-quality, AI-powered image ads in seconds. Upload, customize, and generate visuals tailored for your audience"
          buttonText="Try it now"
          buttonHref="/dashboard/ad-form"
        />
      </div>

      <div className="flex flex-col items-center gap-4 ">
        <Image
          src="/get-started.png"
          width={401}
          height={333}
          alt="Let's get started."
        />
      </div>
    </main>
  );
}
