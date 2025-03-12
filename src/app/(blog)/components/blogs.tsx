import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Avatar1 from "../../../../public/avatar-1.png";
import Avatar2 from "../../../../public/avatar-2.png";
import Avatar3 from "../../../../public/avatar-3.png";
import Avatar4 from "../../../../public/avatar-4.png";
import Avatar5 from "../../../../public/avatar-5.png";
import Avatar6 from "../../../../public/avatar-6.png";
import Avatar7 from "../../../../public/avatar-7.png";
import Avatar8 from "../../../../public/avatar-8.png";
import Avatar9 from "../../../../public/avatar-9.png";
import Blogs1 from "../../../../public/blog-1.png";
import Blogs2 from "../../../../public/blog-2.png";
import Blogs3 from "../../../../public/blog-3.png";
import Blogs4 from "../../../../public/blog-4.png";
import Blogs5 from "../../../../public/blog-5.png";
import Blogs6 from "../../../../public/blog-6.png";
import Blogs7 from "../../../../public/blog-7.png";
import Blogs8 from "../../../../public/blog-8.png";
import Blogs9 from "../../../../public/blog-9.png";
import BlogCard, { BlogCardProps } from "./blog-card";

export const blogData: BlogCardProps[] = [
  {
    id: 1,
    image: Blogs1,
    title: "7 Design Principles for High-Converting Ads",
    description:
      "Learn the fundamental design principles that can significantly improve your ad conversion rates.",
    author: "Martha Adams",
    avatar: Avatar1,
    date: "Dec 20, 2024",
  },
  {
    id: 2,
    image: Blogs2,
    title:
      "The Future of Advertising: How AI is Transforming Image Ad Creation",
    description:
      "As digital marketing evolves, AI is reshaping the way brands create and optimize image ads.",
    author: "Edwin Briggs",
    avatar: Avatar2,
    date: "Dec 21, 2024",
  },
  {
    id: 3,
    image: Blogs3,
    title: "The Role of AI in Multicultural and Inclusive Advertising",
    description:
      "Diversity is crucial in today's advertising landscape, but ensuring that ads represent diverse audiences accurately can be a problem.",
    author: "Martha Adams",
    avatar: Avatar3,
    date: "Dec 20, 2024",
  },
  {
    id: 4,
    image: Blogs4,
    title: "How to Create High-Converting Image Ads in Minutes with AI",
    description:
      "With AI, businesses can generate professional-quality image ads in minutes.",
    author: "Jacob Jones",
    avatar: Avatar4,
    date: "Jan 13, 2025",
  },
  {
    id: 5,
    image: Blogs5,
    title: "The Psychology Behind Effective Image Ads: AI’s Secret Weapon",
    description:
      "AI has the ability to analyze millions of successful ads and extract the elements that make them work.",
    author: "Robert Fox",
    avatar: Avatar5,
    date: "Jan 18, 2025",
  },
  {
    id: 6,
    image: Blogs6,
    title: "Personalization in Ad: How AI Helps Brands Connect with Audience",
    description:
      "Consumers expect ads that feel tailor-made for them. AI-powered image ad generators take personalization to the next level.",
    author: "Dianne Russell",
    avatar: Avatar6,
    date: "Jan 27, 2025",
  },
  {
    id: 7,
    image: Blogs7,
    title: "10 Must-Know Trends in AI-Powered Advertising for 2025",
    description:
      "AI-driven advertising is evolving at lightning speed. From ad targeting to real-time optimization.",
    author: "Franklin Edwards",
    avatar: Avatar7,
    date: "Feb 10, 2025",
  },
  {
    id: 8,
    image: Blogs8,
    title: "AI vs. Human Creativity: Can AI Replace Designers in Ad Creation?",
    description:
      "The rise of AI in design sparks an important debate: Can AI truly replace human creativity?",
    author: "Martin Holloway",
    avatar: Avatar8,
    date: "Feb 16, 2025",
  },
  {
    id: 9,
    image: Blogs9,
    title:
      "The Ultimate Guide to AI-Powered Ad Design: Tools, Tips, and Trends",
    description:
      "Whether you're new to AI-powered advertising or looking to refine your strategy, this guide has everything you need.",
    author: "Viola Watson",
    avatar: Avatar9,
    date: "Feb 28, 2025",
  },
];

export const Blogs = () => {
  return (
    <div className="max-md:px-4">
      <h2 className="text-[#121316] text-[28px] leading-[36px] font-semibold line-clamp-2">
        Recent blog post
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[26px] gap-y-12 pb-8 md:pb-16 pt-6 md:pt-4">
        {blogData.map((blog, index) => (
          <Link key={index} href={`/blog/${blog.id}`}>
            <BlogCard {...blog} />
          </Link>
        ))}
      </div>

      <Link
        href={"#"}
        className="bg-light-purple cursor-pointer text-white px-6 py-3 rounded-sm hover:bg-dark-purple transition-colors flex items-center justify-center gap-2 w-fit mt-10 mx-auto"
      >
        <p>Load More</p> <ArrowRight />
      </Link>
    </div>
  );
};

export default Blogs;
