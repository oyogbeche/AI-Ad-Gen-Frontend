"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Access from "./access";
const Hero2 = () => {
  return (
    <div className="bg-white relative flex flex-col items-center justify-between overflow-hidden px-4 md:px-10">
      {/* Hero Text Section */}
      <motion.div
        className="max-w-3xl text-center mt-16 md:mt-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="md:block lg:whitespace-nowrap">
            Create Professional Ads in Minutes:
          </span>
          <span className="text-[#B800B8] block">No Design Skill Needed!</span>
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <span className="lg:whitespace-nowrap md:block">
            Struggling to create high-quality ads? GenZ Ad is the AI-powered
            tool
          </span>

          <span className="lg:whitespace-nowrap md:block">
            that helps you design stunning, high-converting ads without hiring a
          </span>

          <span className="lg:whitespace-nowrap md:block">
            designer or spending hours on complicated software.
          </span>
        </motion.p>
      </motion.div>

      {/* Laptop SVG Image */}
      <motion.div
        className="relative w-full flex justify-center "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <Image src="/Laptop1.png" alt="Laptop" width={1600} height={600} />
        
      </motion.div>
      <div className="relative w-full flex justify-center mt-[-75px]"> 
        <Access />
      </div>
    </div>
  );
};

export default Hero2;
