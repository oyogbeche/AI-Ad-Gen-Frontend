"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  useCampaignImage,
  useMockImage,
} from "@/domains/ads-gen/api/use-campaign-image";
import Loader from "@/components/ui/loader";

const StandalonePage = () => {
  const { imageId } = useParams();

  // Flag to enable/disable testing mode
  // Set this to `false` to use real data
  const isTestingMode = true;

  const { data: imageData, isLoading } = isTestingMode
    ? useMockImage(imageId as string)
    : useCampaignImage(imageId as string);

  // console.log("IMAGE DATA", imageData);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader />
      </div>
    );
  }

  const imageUrl = imageData?.image?.image_url || "/preview.png";

  return (
    <main className="flex flex-col items-center py-12">
      <picture className="p-8 mb-8 bg-white">
        <Image src={imageUrl} height={536} width={598} alt="" />
      </picture>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          href={"/signin"}
          className="bg-light-purple cursor-pointer text-white px-6 py-3 mb-6 rounded-sm hover:bg-dark-purple transition-colors flex items-center justify-center gap-2 w-fit mx-auto"
        >
          Sign up to create Ad
        </Link>
      </motion.div>

      <p className="text-[#5F5F5F] text-center">
        Start generating engaging ads tailored just for you by signing up.
      </p>
    </main>
  );
};

export default StandalonePage;
