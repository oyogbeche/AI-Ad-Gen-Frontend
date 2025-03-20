import { ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

export interface BlogCardProps {
  id: number;
  image: string | StaticImageData;
  title: string;
  description: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  image,
  title,
  description,
}) => {
  return (
    <div className="max-w-[410px] w-full flex flex-col">
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
      <div className="flex flex-col gap-5">
        <h2 className="text-[#121316] text-2xl leading-8 font-semibold line-clamp-2">
          {title}
        </h2>
        <p className="text-[#5F5F5F] text-[20px] leading-8 font-normal line-clamp-3">
          {description}
        </p>
      </div>
      <Link
        href={`/blog/${id}`}
        className="bg-light-purple cursor-pointer text-white px-6 py-3 rounded-sm hover:bg-dark-purple transition-colors hidden md:flex justify-center items-center gap-2 w-fit"
      >
        <p>Read more</p> <ArrowRight />
      </Link>
    </div>
  );
};

export default BlogCard;
