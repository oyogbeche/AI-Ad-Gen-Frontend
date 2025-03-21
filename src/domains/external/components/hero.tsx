"use client";

import { slickSettings } from "@/lib/slick";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useAuthStore } from "@/store/auth-store";

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
  const token = useAuthStore((state) => state.token);

  return (
    <div className="bg-cover bg-center bg-no-repeat relative md:min-h-[800px] flex flex-col items-center justify-between overflow-hidden">
      <div className="absolute inset-0 z-0"></div>

      <motion.div
        className="relative z-10 max-w-[1037px] w-full px-4 mt-16 md:mt-[120px] text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        exit={{ opacity: 0, y: -20 }}
      >
        <motion.h1
          className="text-3xl md:text-[64px] font-medium text-[#121316] tracking-tight mb-4 lg:max-w-5xl text-center lg:mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Generate High-converting, <br className="hidden xl:block" /> Smarter
          Adverts in minutes
          <span className="text-[#B800B8] ml-2 font-semibold">with AI</span>
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          AI generated ads that maximise engagement and revenue
        </motion.p>
        <div className="flex gap-4 md:gap-10 flex-col md:flex-row justify-center">
          <AnimatedButton
            href="/generate-ad"
            text="Try a Demo Ad"
            variant="outline"
          />

          <AnimatedButton
            href={token ? "dashboard" : "/signin"}
            text="Generate Your Ad"
            variant="primary"
          />
        </div>
      </motion.div>

      <motion.div
        className="w-full px-4 slider-container -mb-8 mt-10 md:mt-[80px] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        exit={{ opacity: 0, y: 50 }}
      >
        <Slider {...slickSettings}>
          {heroImages.map((image, index) => (
            <motion.div
              key={index}
              className="outline-none flex items-center justify-center h-[200px] md:h-[450px] relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="max-w-full max-h-full object-contain absolute bottom-[-20px]"
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

interface AnimatedButtonProps {
  href: string;
  text: string;
  variant?: "primary" | "outline";
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  motionProps?: any;
}





const AnimatedButton = ({
  href,
  text,
  variant = "primary",
  className = "",
  motionProps = {},
}: AnimatedButtonProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const baseStyles =
    "cursor-pointer px-6 py-3 rounded-sm transition-colors flex justify-center items-center gap-2 w-fit mx-auto overflow-hidden";
  const variantStyles = {
    primary: "bg-light-purple text-white hover:bg-dark-purple",
    outline: "text-[#520052] border border-[#B800B8] hover:bg-[#cf54cf21]",
  };
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  // Split text into individual letters for animation
  const letters = text.split("");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.9, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...motionProps}
    >
      <Link
        href={href}
        className={buttonStyles}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <motion.div
          className="flex items-center justify-center gap-2 w-full"
          animate={isHovering ? "animate" : "initial"}
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.03,
                repeat: Infinity,
                repeatDelay: 0.1,
                duration: 0.2,
                when: "beforeChildren",
              },
            },
          }}
        >
          <div className="flex">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                variants={{
                  initial: { x: 0, opacity: 1 },
                  animate: {
                    x: ["-15px", "0px"],
                    opacity: [0, 1],
                    transition: {
                      x: { duration: 0.15, ease: "easeOut" },
                      opacity: { duration: 0.15 },
                    },
                  },
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>

          <motion.div
            variants={{
              initial: { opacity: 1, rotate: 0 },
              animate: {
                opacity: [0, 1],
                rotate: [-180, 0],
                transition: {
                  opacity: { duration: 0.1, delay: letters.length * 0.03 },
                  rotate: {
                    duration: 0.3,
                    ease: "easeOut",
                    delay: letters.length * 0.03,
                  },
                },
              },
            }}
          >
            <ArrowRight />
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  );
};