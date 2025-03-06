"use client";
import { settings } from "@/helpers/slick-slider";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

const heroImages = [
  {
    src: "/fanta-ad.png",
    alt: "Fanta Orange Flavor Ad",
  },
  {
    src: "/sprite-ad.png",
    alt: "Sprite Fresh Ad",
  },
  {
    src: "/tech-ad.png",
    alt: "Technology Concept Ad",
  },
  {
    src: "/cosmetic-ad.png",
    alt: "Cosmetic Product Ad",
  },
  {
    src: "/landscape-ad.png",
    alt: "Landscape Concept Ad",
  },
  {
    src: "/cokead.png",
    alt: "Food Product Ad",
  },
];

const HeroSection = () => {

  return (
    <div className="   bg-cover bg-center bg-no-repeat relative w-full min-h-[800px] flex flex-col items-center justify-between  overflow-hidden">
      <div className="absolute inset-0 z-0  opacity-50"></div>

      <div className="relative z-10 max-w-4xl w-full px-4 mt-20 text-center mb-14 animate-in fade-in zoom-in duration-700">
        <h1 className="text-4xl md:text-5xl font-medium text-[#5F5F5F] tracking-tight mb-4">
          Generate High-converting, Smarter Adverts in minutes
          <span className="text-[#520052] ml-2">with AI</span>
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Create compelling, high-converting ads to maximize ROI
        </p>
        <Link
          href={"/ad-type"}
          className="bg-[#B800B8] cursor-pointer text-white px-6 py-3 rounded-sm hover:bg-purple-700 transition-colors animate-in delay-150 duration-300"
        >
          Generate New Ad →
        </Link>
      </div>

      <div className="w-full  px-4 slider-container -mb-8 mt-10">
        <Slider {...settings}>
          {heroImages.map((image, index) => (
            <div
              key={index}
              className="outline-none flex items-center justify-center h-[450px]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="max-w-full max-h-full object-contain"
                quality={100}
                width={1000}
                height={500}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroSection;
