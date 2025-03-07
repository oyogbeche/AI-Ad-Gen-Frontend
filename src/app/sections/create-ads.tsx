"use client";
import Image from "next/image";
import createadImg from "@/components/images/createadsImg.svg";
import circle from "@/components/icons/circle.svg";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const notes = [
  {
    name: "Input Brand Details",
    description:
      "Define your brand name, product details, target audience, upload your brand assets",
  },
  {
    name: "Enter Audience Info",
    description: "Enter the details of your target audience",
  },
  {
    name: "Customize Ads",
    description: "Personalize details to match your brand's style",
  },
  {
    name: "Generate Ads",
    description: "Receive your ad instantly as soon as you're done!",
  },
];

const CreateAds = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10 lg:gap-[80px] px-6 pt-6 md:p-20"
    >
      <motion.div
        className="max-w-[400px] md:max-w-[500px] lg:max-w-[595px] h-auto"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.8 }}
        exit={{ opacity: 0, x: -50 }}
      >
        <Image
          src={createadImg}
          alt="createads"
          height={681}
          width={595}
          className="object-cover"
        />
      </motion.div>

      <motion.div
        className="flex flex-col text-center lg:text-left"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.8 }}
        exit={{ opacity: 0, x: 50 }}
      >
        <motion.p
          className="text-[#10509A] text-sm md:text-base font-semibold"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          CREATE ADS YOURSELF EASILY
        </motion.p>
        <motion.p
          className="text-[28px] md:text-[36px] lg:text-[48px] font-semibold leading-tight"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          How to Make Ads Using <br className="hidden md:block" /> Adgen-AI
        </motion.p>

        <motion.div
          className="mt-6 md:mt-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {notes.map((note, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 md:gap-[30px] mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
              whileHover={{ x: 5 }}
            >
              <motion.span
                className="text-rich-black flex justify-center items-center relative w-8 h-8 md:w-10 md:h-10"
                whileHover={{ rotate: 10 }}
              >
                <Image
                  src={circle}
                  alt="circle"
                  className="absolute w-full h-full"
                />
                <p className="relative text-sm md:text-base font-bold">
                  {index + 1}
                </p>
              </motion.span>
              <div className="flex flex-col items-start text-start">
                <p className="text-rich-black font-bold text-[18px] md:text-[22px] lg:text-[24px]">
                  {note.name}
                </p>
                <p className="text-gray-500 max-w-md font-medium text-[14px] md:text-[16px] lg:text-[18px] text-start md:text-left">
                  {note.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CreateAds;