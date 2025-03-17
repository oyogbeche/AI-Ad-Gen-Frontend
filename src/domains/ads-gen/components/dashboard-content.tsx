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
import { useEffect, useState } from "react";
import { getRequest } from "@/lib/api";

const DashboardContent = () => {
  const [filter, setFilter] = useState<keyof Ads>("user");
  const [sortOption, setSortOption] = useState("Most Popular");

  const [publishedImages, setPublishedImages] = useState([]);
  const [isPublishedLoading, setIsPublishedLoading] = useState(true);

  const [userImages, setUserImages] = useState<Ad[]>([]);
  const [isUserLoading, setIsUserLoading] = useState(true);

  const [isLoaded, setIsLoaded] = useState(false);

  interface Ad {
    image_url: string;
    prompt: string;
  }

  interface Ads {
    user: Ad[];
    community: Ad[];
  }
  const ads: Ads = {
    // user: [
    //   {
    //     // type: "image",
    //     image_url: "/images/my-ad-1.png",
    //     prompt: "Soft Drinks Ad",
    //     // authorInfo: "5 days ago",
    //   },
    //   {
    //     // type: "image",
    //     image_url: "/images/my-ad-2.png",
    //     prompt: "Soft Drinks Ad",
    //     // authorInfo: "1 week ago",
    //   },
    //   {
    //     // type: "image",
    //     image_url: "/images/my-ad-3.png",
    //     prompt: "Soft Drinks Ad",
    //     // authorInfo: "2 weeks ago",
    //   },
    //   {
    //     // type: "video",
    //     image_url: "/images/hng-wig-1.png",
    //     prompt: "Soft Drinks Ad",
    //     // authorInfo: "3 days ago",
    //   },
    //   {
    //     // type: "image",
    //     image_url: "/images/hng-wig-2.png",
    //     prompt: "Soft Drinks Ad",
    //     // authorInfo: "2 days ago",
    //   },
    //   {
    //     // type: "image",
    //     image_url: "/images/hng-wig-3.png",
    //     prompt: "Soft Drinks Ad",
    //     // authorInfo: "1 day ago",
    //   },
    // ],
    // {
    // type: "image",
    //   image_url: "/images/hng-wig-1.png",
    //   title: "HNG Wigs Ad",
    //   authorInfo: {
    //     name: "FaithJames",
    //     avatar: "/images/avatar-1.png",
    //   },

    user: userImages,
    community: publishedImages,

    // [
    //   {
    //     // type: "image",
    //     image_url: "/images/hng-wig-1.png",
    //     title: "HNG Wigs Ad",
    //     authorInfo: {
    //       name: "FaithJames",
    //       avatar: "/images/avatar-1.png",
    //     },
    //   },
    //   {
    //     // type: "image",
    //     image_url: "/images/hng-wig-2.png",
    //     title: "HNG Wigs Ad",
    //     authorInfo: {
    //       name: "FaithJames",
    //       avatar: "/images/avatar-2.png",
    //     },
    //   },
    //   {
    //     type: "video",
    //     image_url: "/images/hng-wig-3.png",
    //     title: "HNG Wigs Ad",
    //     authorInfo: {
    //       name: "FaithJames",
    //       avatar: "/images/avatar-3.png",
    //     },
    //   },
    //   {
    //     // type: "image",
    //     image_url: "/images/my-ad-1.png",
    //     title: "HNG Wigs Ad",
    //     authorInfo: {
    //       name: "FaithJames",
    //       avatar: "/images/avatar-4.png",
    //     },
    //   },
    //   {
    //     // type: "image",
    //     image_url: "/images/my-ad-2.png",
    //     title: "HNG Wigs Ad",
    //     authorInfo: {
    //       name: "FaithJames",
    //       avatar: "/images/avatar-5.png",
    //     },
    //   },
    //   {
    //     // type: "image",
    //     image_url: "/images/my-ad-3.png",
    //     title: "HNG Wigs Ad",
    //     authorInfo: {
    //       name: "FaithJames",
    //       avatar: "/images/avatar-1.png",
    //     },
    //   },
    // ],
  };

  useEffect(() => {
    // setIsLoaded(true);
    getRequest("/image/all/published")
      .then((data) => {
        if (data.success && data.data && data.images) {
          setPublishedImages(data.data.images);
          console.log("data", data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching community images", error);
      })
      .finally(() => {
        setIsPublishedLoading(false);
        updateLoadedState();
      });
  }, []);

  useEffect(() => {
    getRequest("/image/")
      .then((data) => {
        if (data.success && data.data && data.images) {
          setUserImages(data.data.images);
          console.log("User images data:", data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching user images:", error);
      })
      .finally(() => {
        setIsUserLoading(false);
        updateLoadedState();
      });
  }, []);

  const updateLoadedState = () => {
    if (!isUserLoading && !isPublishedLoading) {
      setIsLoaded(true);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

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
      y: -5,
      boxShadow: "0 10px 10px rgba(0,0,0,0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <>
      {ads.user.length && ads.community.length == 0 ? (
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
              {(["user", "community"] as (keyof Ads)[]).map((category) => (
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
            variants={containerVariants}
            initial="hidden"
            animate="show"
            key={filter}
          >
            {(ads[filter] || []).map((ad, i) => (
              <motion.div
                key={i}
                className="border-[#ECECEC] border bg-[#FCFCFC] rounded-[8px] overflow-hidden"
                variants={itemVariants}
                whileHover="hover"
              >
                <div className="relative group h-[294px] overflow-hidden">
                  <div className="absolute inset-0 bg-slate-100"></div>
                  <Image
                    src={ad.image_url}
                    fill={true}
                    alt="ad"
                    priority={i < 3}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ height: "100%" }}
                  />
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#00000066] transition-opacity duration-300 group-hover:opacity-40"></div>
                  <span className="absolute top-4 left-4 bg-white rounded-[40px] px-3 py-1 text-sm font-medium z-10">
                    {/* {ad.type === "image" ? "Image ad" : "Video ad"} */}
                    image
                  </span>
                </div>
                <motion.div
                  className="flex flex-col gap-[10px] mt-2.5 ml-4 mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="font-semibold">{ad.prompt}</span>
                  {filter === "community" ? (
                    <div className="flex gap-2.5 items-center">
                      <div className="w-5 h-5 rounded-full overflow-hidden relative">
                        <Image
                          // src={(ad.authorInfo as { avatar: string }).avatar}
                          src={"/avatar-3.png"}
                          fill={true}
                          alt="avatar"
                          sizes="20px"
                          className="object-cover"
                        />
                      </div>
                      <span className="text-[#7D7D7D]">
                        {/* {(ad.authorInfo as { name: string }).name} */}
                        Ayscript Dev
                      </span>
                    </div>
                  ) : (
                    <div className="flex gap-2.5 items-center">
                      <span className="text-[#7D7D7D]">
                        {/* {ad.authorInfo as string} */}2 Days Ago
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
