import BlogFooter from "../components/blog-footer";
import BlogHeroSection from "../components/blog-hero-section";
import Blogs from "../components/blogs";

const Page = () => {
  return (
    <div className="max-w-7xl w-full xl:mx-auto max-lg:px-4 pt-8">
      <BlogHeroSection />
      <Blogs />
      <BlogFooter />
    </div>
  );
};

export default Page;
