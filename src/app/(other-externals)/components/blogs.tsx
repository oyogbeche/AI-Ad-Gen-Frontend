import Blogs1 from "../../../../public/blog-1.png";
import Blogs2 from "../../../../public/blog-2.jpeg";
import Blogs3 from "../../../../public/blog-3.jpeg";
import Blogs4 from "../../../../public/blog-4.jpeg";
import BlogCard, { BlogCardProps } from "./blog-card";

export const blogData: BlogCardProps[] = [
  {
    id: 1,
    image: Blogs1,
    title:
      "The Future of AI in Advertising: Transforming Creativity and Performance in Marketing",
    description:
      "Imagine crafting high-performing ads in seconds—without the guesswork. AI is reshaping advertising, blending creativity with data-driven precision to deliver smarter, more engaging camp.......",
  },
  {
    id: 2,
    image: Blogs2,
    title: "The Ultimate Guide to Scaling Your Business with Digital Ads",
    description:
      "Growing a business is tough, but the right digital advertising strategy can accelerate success. From paid social media campaigns.......",
  },
  {
    id: 3,
    image: Blogs3,
    title: "The Role of AI in Multicultural and Inclusive Advertising",
    description:
      "Great ads don’t just sell products—they trigger emotions, solve problems, and build trust. Understanding consumer psychology can......",
  },
  {
    id: 4,
    image: Blogs4,
    title: "How Video Ads Are Dominating Digital Marketing",
    description:
      "Video content is taking over the digital landscape, and businesses that leverage video ads are seeing massive engagement and ........",
  },
];

export const Blogs = () => {
  return (
    <div>
      <h2 className="text-[#121316] text-[28px] leading-[36px] font-semibold line-clamp-2">
        Featured Articles on Marketing and AI Trends
      </h2>
      <p>
        Explore the latest marketing and AI trends, from data-driven advertising
        to emerging strategies, and stay ahead in the digital landscape.
      </p>
      <div className="flex flex-col md:flex-row gap-x-[26px] gap-y-12 pb-8 md:pb-16 pt-6 md:pt-4">
        {blogData.map((blog, index) => (
          <div key={index}>
            <BlogCard {...blog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
