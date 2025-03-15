import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { useState } from "react";

interface Ads {
  user: string[];
  community: string[];
}

const ads: Ads = {
  user: Array(6).fill("/images/hng-wig-1.png"),
  community: Array(8).fill("/images/hng-wig-3.png"),
};

const DashboardContent = () => {
  const [filter, setFilter] = useState<keyof Ads>("user");

  return (
    <section className="bg-white rounded-[20px] p-6 flex flex-col gap-10 mt-10 ">
      <div className="flex justify-between">
        <div className="flex gap-5 ">
          {(["user", "community"] as (keyof Ads)[]).map((category) => (
            <button
              key={category}
              className={`rounded-[8px] p-2 text-[14px] font-semibold ${
                filter === category
                  ? " text-[#7D7D7D]] bg-[#ECECEC] border border-[#ECECEC]"
                  : "text-[#7D7D7D]"
              }`}
              onClick={() => setFilter(category)}
            >
              {category === "user" ? "Your Ads" : "Community"}
            </button>
          ))}
        </div>
        {filter == "community" && (
          <div className="flex gap-2.5 items-center">
            <p className="text-[#121316] text-[14px] font-semibold">
              Sort by :{" "}
            </p>
            <Select>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Most polular" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Most Recent">Most Recent</SelectItem>
                  <SelectItem value="Most Viewed">Most Viewed</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {(ads[filter] || []).map((src, i) => (
          <div
            key={i}
            className="border-[#ECECEC] border bg-[#F5F5F5] rounded-[8px] overflow-hidden"
          >
            <div className="relative">
              <Image
                src={src}
                height={294}
                width={409}
                alt="ads"
                priority={false}
                className="w-full h-auto"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#00000066]"></div>
              <span className="absolute top-4 left-4 bg-[white] rounded-[40px] px-3 py-1">
                {filter == "user" ? "Image ad" : "Community"}
              </span>
            </div>
            <div className="flex flex-col gap-[10px] mt-2.5 ml-4 mb-3">
              <span className="font-semibold">HNG Wigs Ad</span>
              <div className="flex gap-2.5 items-center">
                <picture className="w-5 h-5 rounded-full overflow-hidden">
                  <Image
                    src={src}
                    height={294}
                    width={409}
                    alt="ads"
                    priority={false}
                    className="object-cover w-full"
                  />
                </picture>
                <span className="text-[#7D7D7D]">FaithJames</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DashboardContent;
