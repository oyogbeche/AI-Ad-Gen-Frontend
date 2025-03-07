"use client";
import { settings } from "@/helpers/slick-slider";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

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
    <div className="bg-cover bg-center bg-no-repeat relative lg:-mx-36 md:min-h-[800px] flex flex-col items-center justify-between overflow-hidden">
      <div className="absolute inset-0 z-0"></div>

      <motion.div
        className="relative z-10 max-w-[1035px] w-full px-4 mt-16 md:mt-[120px] text-center "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        exit={{ opacity: 0, y: -20 }}
      >
        <motion.h1
          className="text-3xl md:text-[64px] px-5 font-medium text-[#121316] tracking-tight mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Generate High-converting, Smarter Adverts in minutes
          <span className="text-[#520052] ml-2">with AI</span>
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Create compelling, high-converting ads to maximize ROI
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href={"/create-ad/ad-form?type=image"}
            className="bg-light-purple cursor-pointer text-white px-6 py-3 rounded-sm hover:bg-dark-purple transition-colors inline-block"
          >
            Generate New Ad →
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full px-4 slider-container -mb-8 mt-10 md:mt-[80px] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        exit={{ opacity: 0, y: 50 }}
      >
        <Slider {...settings}>
          {heroImages.map((image, index) => (
            <motion.div
              key={index}
              className="outline-none flex items-center justify-center h-[200px] md:h-[450px]"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="max-w-full max-h-full object-contain"
                quality={100}
                width={1000}
                height={500}
              />
            </motion.div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default HeroSection;
