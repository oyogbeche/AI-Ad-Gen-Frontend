import Image, { StaticImageData } from "next/image";
import React from "react";

export interface BlogCardProps {
  id: number;
  image: string | StaticImageData;
  title: string;
  description: string;
  author: string;
  avatar: string | StaticImageData;
  date: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  image,
  title,
  description,
  author,
  avatar,
  date,
}) => {
  return (
    <div className="max-w-[410px] w-full ">
      <div>
        <Image
          className="rounded-2xl w-full object-cover mb-[25px]"
          src={image}
          width={410}
          height={350}
          alt="Blog image"
          priority
          unoptimized
        />
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-[#121316] text-2xl leading-8 font-semibold line-clamp-2">
          {title}
        </h2>
        <p className="text-[#5F5F5F] text-[20px] leading-8 font-normal line-clamp-3">
          {description}
        </p>
        <div className="flex gap-3 items-center">
          <Image
            className="rounded-full"
            src={avatar}
            height={32}
            width={32}
            alt="Author's avatar"
          />
          <p className="text-[#121316] text-[14px] leading-5 font-semibold">
            <span>{author}</span>
            <span className="pl-2">{date}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
