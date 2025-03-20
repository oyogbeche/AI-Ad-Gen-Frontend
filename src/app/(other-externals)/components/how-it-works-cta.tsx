"use client"; // 1) Mark this file as a Client Component

import React from "react";
import Image from "next/image";
// 2) Import from next/navigation in Next.js 13 App Router
import { useRouter } from "next/navigation";

const CtaHowItWorks: React.FC = () => {
  const router = useRouter();

  const handleSignIn = () => {
    router.push("/signin");
  };

  return (
    <section
      className="
        relative
        py-0
        bg-[#B800B8]
        overflow-hidden
        text-white
      "
    >
      <div
        className="
          container
          mx-auto
          px-4
          grid
          grid-cols-1
          md:grid-cols-2
          items-center
          gap-8
          relative
        "
      >
        {/* Left Side: Headline, Description, and Button */}
        <div className="pl-8 py-8">
          <h3 className="text-3xl font-bold mb-4">
            Simple &amp; Quick Ad Creation.
          </h3>
          <p className="mb-6 leading-relaxed">
            With Genz.ad, you can turn ideas into powerful ads in minutes.
            No complex tools. No expensive software. Just your vision!
          </p>

          {/* CTA Button using onClick */}
          <button
            onClick={handleSignIn}
            className="
              inline-block
              px-6
              py-3
              bg-white
              text-[#B800B8]
              font-semibold
              rounded-md
              hover:opacity-90
              transition
            "
          >
            Start Creating Your Ad
          </button>
        </div>

        {/* Right Side: Man with Megaphone Image */}
        <div className="flex items-end justify-end overflow-hidden">
          <Image
            src="/man.svg"
            alt="Man with Megaphone"
            width={1200}
            height={800}
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default CtaHowItWorks;
