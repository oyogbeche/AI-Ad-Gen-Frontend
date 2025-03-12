import BlogFooter from "../components/blog-footer";
import BlogHeroSection from "../components/blog-hero-section";
import Blogs from "../components/blogs";

const Page = () => {
  return (
    <div className="max-w-7xl w-full mx-auto pt-8">
      <BlogHeroSection />
      <Blogs />
      <BlogFooter />
    </div>
  );
};

export default Page;
