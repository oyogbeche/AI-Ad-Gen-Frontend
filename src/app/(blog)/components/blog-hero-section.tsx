import Image from "next/image";

const BlogHeroSection = () => {
  return (
    <div className="relative h-fit w-full overflow-hidden rounded-2xl bg-black/40 mb-6 md:mb-12">
      <div className="w-full mx-auto h-[350px] sm:h-[704px] md:h-[500px] lg:h-[704px]">
        <Image
          src="/blog-hero.svg"
          alt="Explore articles, tips, and insights on marketing trends, AI-driven advertising, and best practices to refine your ad strategy and maximize your brand's impact."
          className="absolute inset-0 object-cover w-full h-full aspect-square"
          fill
          priority
        />
      </div>

      <div className="max-md:hidden absolute bottom-4 left-4 sm:bottom-8 sm:left-8 mx-auto max-w-fit md:flex flex-col gap-4 items-start justify-start lg:mx-0">
        <figure>
          <blockquote className="mt-2 text-lg text-white font-nunito font-bold lg:text-4xl leading-[36px] sm:leading-[48px] md:leading-[40px] lg:leading-[48px]">
            <p>Stay Ahead with Expert Insights on Marketing Trends</p>
          </blockquote>
          <figcaption className="mt-4 pr-6 max-w-4xl text-white font-nunito text-base sm:text-xl font-normal leading-6 sm:leading-7 md:leading-6 lg:leading-7">
            <div>
              Explore articles, tips, and insights on marketing trends,
              AI-driven advertising, and best practices to refine your ad
              strategy and maximize your brand&apos;s impact.
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default BlogHeroSection;
