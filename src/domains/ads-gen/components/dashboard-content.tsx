import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAdsContext } from "../context/AdsContext";
import Loader from "@/components/ui/loader";
import { useAdsData } from "../api/use-ads-data";

const DashboardContent = ({ filt }: { filt?: "user" | "community" }) => {
  const [filter, setFilter] = useState<"user" | "community">(
    filt ? filt : "user"
  );
  const [sortOption, setSortOption] = useState("most-recent");

  const { adData, setAdData } = useAdsContext();
  const { publishedImages, userImages, isLoading } = useAdsData();

  // console.log("DASHBOARD", adData);
  const router = useRouter();

  useEffect(
    () =>
      setAdData({
        user: userImages,
        community: publishedImages,
      }),
    [userImages, publishedImages, setAdData]
  );

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return isLoading ? (
    <Loader fullscreen={false} />
  ) : (
    <>
      {adData.user.length == 0 && adData.community.length == 0 ? (
        <div className="flex flex-col items-center gap-4 my-32">
          <Image
            src="/get-started.png"
            width={401}
            height={333}
            alt="Let's get started."
          />
        </div>
      ) : (
        <section
          className={`bg-white rounded-[20px] px-4 py-6 md:p-6 flex flex-col gap-10 mt-10 transition-all duration-500 ${
            !isLoading ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex justify-between flex-col sm:flex-row gap-4">
            <div className="flex gap-3 md:gap-5">
              {(["user", "community"] as const).map((category) => (
                <motion.button
                  key={category}
                  className={`rounded-[8px] p-2 text-[14px] font-semibold cursor-pointer ${
                    filter === category
                      ? "text-[#7D7D7D] bg-[#ECECEC] border border-[#ECECEC]"
                      : "text-[#7D7D7D]"
                  }`}
                  onClick={() => setFilter(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {category === "user" ? "Recent Ads" : "Community"}
                </motion.button>
              ))}
            </div>
            {filter === "community" && (
              <motion.div
                className="flex gap-2.5 items-center"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-[#121316] text-[14px] font-semibold">
                  Sort by:{" "}
                </p>
                <Select value={sortOption} onValueChange={setSortOption}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Most recent" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="most-recent">Most recent</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </motion.div>
            )}
          </div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            initial="hidden"
            animate="show"
            key={filter}
          >
            {adData &&
              adData[filter].map((ad, i) => (
                <motion.div
                  key={i}
                  className="border-[#ECECEC] border bg-[#FCFCFC] rounded-[8px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
                  variants={itemVariants}
                  whileHover="hover"
                  onClick={() =>
                    router.push(`/dashboard/details?type=${filter}&id=${i}`)
                  }
                >
                  <div className="relative group h-[140px] sm:h-[294px] overflow-hidden">
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.4, ease: "easeOut" },
                      }}
                    >
                      <Image
                        src={ad.image_url}
                        fill
                        alt={`${ad.prompt}`}
                        priority={i < 3}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover cursor-pointer"
                        style={{ height: "100%" }}
                        unoptimized
                      />
                      <motion.div
                        className="absolute inset-0 bg-black opacity-0"
                        whileHover={{ opacity: 0.5 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </div>
                  <motion.div className="flex flex-col gap-[10px] mt-2.5 ml-4 mb-3">
                    <span className="font-semibold">{ad.product_name}</span>
                    {filter === "community" && (
                      <div className="flex gap-2.5 items-center">
                        <div className="w-5 h-5 rounded-full overflow-hidden relative flex items-center justify-center">
                          <div className="bg-[#2C2C2C] flex items-center justify-center size-[20px] rounded-full text-[#F5F5F5] font-semibold text-xs">
                            {ad.author_info.name[0].toUpperCase()}
                          </div>
                        </div>
                        <span className="text-[#7D7D7D] text-sm">
                          {ad.author_info.name}
                        </span>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
          </motion.div>
        </section>
      )}
    </>
  );
};

export default DashboardContent;
