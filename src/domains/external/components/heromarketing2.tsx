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
          className="text-3xl md:text-5xl max-w-[1031px] text-center font-bold text-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="md:block text-2xl md:text-[64px] leading-6 md:leading-[72px] font-medium ">
            Boost Engagement with{" "}
            <span className="text-[#B800B8] ml-2 font-semibold">
              {" "}
              AI-Powered Ad Content!
            </span>
          </span>
          {/* <span className="text-[#B800B8]">
            Smarter, Faster, Results-Driven!
          </span> */}
        </motion.h1>
        <motion.p
          className="text-lg text-[#5F5F5F] mt-2 md:mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h2 className="max-w-[787px] md:block text-base md:text-2xl leading-4 md:leading-8 font-medium">
            Save Time, Create Personalized Ads, and Drive Real Results
          </h2>
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
