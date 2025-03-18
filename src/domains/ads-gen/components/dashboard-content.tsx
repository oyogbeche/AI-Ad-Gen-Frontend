import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { motion } from "framer-motion";
import { motion } from "framer-motion";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useAdsContext } from "../context/AdsContext";
import { useRouter } from "next/navigation";

const DashboardContent = () => {
  const [filter, setFilter] = useState<"user" | "community">("user");
  const [isLoaded, setIsLoaded] = useState(false);
  const [sortOption, setSortOption] = useState("Most Popular");
  const { adData, setAdData } = useAdsContext();
  const router = useRouter();

  useEffect(() => {
    setAdData({
      user: [
        {
          type: "image",
          src: "/images/my-ad-1.png",
          title: "Soft Drinks Ad",
          authorInfo: "5 days ago",
        },
        {
          type: "image",
          src: "/images/my-ad-2.png",
          title: "Soft Drinks Ad",
          authorInfo: "1 week ago",
        },
        {
          type: "image",
          src: "/images/my-ad-3.png",
          title: "Soft Drinks Ad",
          authorInfo: "2 weeks ago",
        },
        {
          type: "video",
          src: "/images/hng-wig-1.png",
          title: "Soft Drinks Ad",
          authorInfo: "3 days ago",
        },
        {
          type: "image",
          src: "/images/hng-wig-2.png",
          title: "Soft Drinks Ad",
          authorInfo: "2 days ago",
        },
        {
          type: "image",
          src: "/images/hng-wig-3.png",
          title: "Soft Drinks Ad",
          authorInfo: "1 day ago",
        },
      ],
      community: [
        {
          type: "image",
          src: "/images/hng-wig-1.png",
          title: "HNG Wigs Ad",
          authorInfo: { name: "FaithJames", avatar: "/images/avatar-1.png" },
        },
        {
          type: "image",
          src: "/images/hng-wig-2.png",
          title: "HNG Wigs Ad",
          authorInfo: { name: "FaithJames", avatar: "/images/avatar-2.png" },
        },
        {
          type: "video",
          src: "/images/hng-wig-3.png",
          title: "HNG Wigs Ad",
          authorInfo: { name: "FaithJames", avatar: "/images/avatar-3.png" },
        },
        {
          type: "image",
          src: "/images/my-ad-1.png",
          title: "HNG Wigs Ad",
          authorInfo: { name: "FaithJames", avatar: "/images/avatar-4.png" },
        },
        {
          type: "image",
          src: "/images/my-ad-2.png",
          title: "HNG Wigs Ad",
          authorInfo: { name: "FaithJames", avatar: "/images/avatar-5.png" },
        },
        {
          type: "image",
          src: "/images/my-ad-3.png",
          title: "HNG Wigs Ad",
          authorInfo: { name: "FaithJames", avatar: "/images/avatar-1.png" },
        },
      ],
    });
    setIsLoaded(true);
  }, [setAdData]);

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
      boxShadow: "0 2px 2px rgba(0,0,0,0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <>
      {adData?.user.length == 0 && adData?.community.length == 0 ? (
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
            isLoaded ? "opacity-100" : "opacity-0"
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
                  {category === "user" ? "Your Ads" : "Community"}
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
                  <SelectTrigger className="w-[140px] cursor-pointer">
                    <SelectValue placeholder="Most Popular" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Most Popular">Most Recent</SelectItem>
                      <SelectItem value="Most Recent">Most Viewed</SelectItem>
                      <SelectItem value="Most Viewed">Date Created</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </motion.div>
            )}
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            initial="hidden"
            animate="show"
            key={filter}
          >
            {adData &&
              adData[filter]?.map((ad, i) => (
                <motion.div
                  key={i}
                  className="border-[#ECECEC] border bg-[#FCFCFC] rounded-[8px] overflow-hidden"
                  variants={itemVariants}
                  whileHover="hover"
                  onClick={() =>
                    router.push(`/dashboard/details?type=${filter}&id=${i}`)
                  }
                >
                  <div className="relative group h-[294px] overflow-hidden">
                    <Image
                      src={ad.src}
                      fill={true}
                      alt="ad"
                      priority={i < 3}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ height: "100%" }}
                    />
                  </div>
                  <motion.div className="flex flex-col gap-[10px] mt-2.5 ml-4 mb-3">
                    <span className="font-semibold">{ad.title}</span>
                    {filter === "community" &&
                    ad.authorInfo &&
                    typeof ad.authorInfo === "object" ? (
                      <div className="flex gap-2.5 items-center">
                        <div className="w-5 h-5 rounded-full overflow-hidden relative">
                          <Image
                            src={ad.authorInfo.avatar}
                            fill={true}
                            alt="avatar"
                            sizes="20px"
                            className="object-cover"
                          />
                        </div>
                        <span className="text-[#7D7D7D]">
                          {ad.authorInfo.name}
                        </span>
                      </div>
                    ) : (
                      <div className="flex gap-2.5 items-center">
                        <span className="text-[#7D7D7D]">
                          {ad.authorInfo.toString()}
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
