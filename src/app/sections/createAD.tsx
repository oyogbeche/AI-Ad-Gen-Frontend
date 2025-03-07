"use client";
import Image from "next/image";
import createAdSVG from "@/components/images/newcreate.svg";
import { CheckCircle } from "@/components/icons/icon";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const CreateAd: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const listItems = [
    "Create compelling ads without hiring a team",
    "Generate region-specific ads effortlessly",
    "Launch professional ads at affordable prices",
    "Optimize your ads for sales and engagements",
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
      className="flex bg-white flex-col lg:flex-row justify-between items-center gap-10 lg:gap-[80px] p-20 px-6 md:px-24"
    >
      <motion.div
        className="max-w-[600px] w-fit"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <motion.p
          className="text-[#EC802E] text-center text-sm md:text-base md:text-left font-semibold uppercase"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Smarter Ads, Higher Engagements
        </motion.p>
        <motion.h2
          className="text-[27px] px-2 md:text-4xl text-center md:text-left font-semibold lg:text-5xl mt-2 md:leading-14"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Create, Customize and Publish{" "}
          <span className="text-black-600">AI-Generated Ads</span> in Minutes
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
              className="flex items-center gap-2"
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
