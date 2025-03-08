"use client";
import Image from "next/image";
import createAdSVG from "@/components/images/newcreate.svg";
import { CheckCircle } from "@/components/icons/icon";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const CreateAd: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const listItems = [
    "Create high quality ads in seconds, not hours.",
    "No experience needed. Our AI handles the visuals.",
    "Launch your ad campaign  with zero costs",
    "Optimize your Ads for sales and engagements",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      ref={sectionRef}
      className="flex  bg-white flex-col lg:flex-row justify-between items-center gap-10 lg:gap-[80px] py-20 px-10 md:px-[250px] md:-mx-40"
    >
      <motion.div
        className="max-w-[600px] w-fit px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <motion.p
          className="text-[#EC802E] text-sm md:text-base text-left uppercase"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          WHY USE GENZ.AD?
        </motion.p>
        <motion.h2
          className="text-[27px] pr-2 md:text-4xl text-left font-medium lg:text-5xl mt-2 md:leading-14"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Why Genz.ad is the best tool for easy high quality Ad creation
        </motion.h2>

        <motion.ul
          className="mt-6 space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {listItems.map((item, index) => (
            <motion.li
              key={index}
              className="flex items-center gap-2 text-[#667185]"
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                <CheckCircle />
              </motion.div>
              {item}
            </motion.li>
          ))}
        </motion.ul>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="pt-5"
        >
          <Link
            href={"/create-ad/ad-form?type=image"}
            className="bg-[#B800B8] cursor-pointer text-white px-6 py-3 rounded-sm hover:bg-[#520052] transition-colors inline-block"
          >
            Generate New Ad →
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex-shrink-0 w-4/5 lg:w-[40%] bg-[#FFF0E5] px-10 pt-[72px] rounded-md flex justify-center align-end overflow-hidden"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        whileHover={{ scale: 1.03 }}
      >
        <motion.div
          initial={{ y: 20 }}
          animate={isInView ? { y: 0 } : { y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Image
            src={createAdSVG}
            alt="Create AI-Generated Ads"
            width={500}
            height={300}
            className="w-full h-auto mx-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CreateAd;
