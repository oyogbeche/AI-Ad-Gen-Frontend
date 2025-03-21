"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { blogData } from "../../components/blogs";

const BlogDetail = () => {
  const { blogId } = useParams();
  const blog = blogData.find((b) => b.id === Number(blogId));
  const otherBlog = blogData.filter((b) => b.id !== Number(blogId));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <section className="max-w-[1264px] mx-auto p-4">
      <div className="relative h-[880px] w-full overflow-hidden rounded-2xl mt-6">
        <picture className="h-[880px] w-full">
          <Image
            src={blog.image}
            alt={blog.title}
            className="absolute inset-0 object-cover w-full h-full aspect-square"
            fill
            priority
          />
        </picture>
      </div>
      <h1 className="text-[#121316] text-[28px] md:text-[32px] font-semibold text-center">
        {blog.title}
      </h1>
      <p className="text-lg mb-4">{blog.description}</p>
      <p>{blog.description}</p>
      <div>
        <h1 className="text-2xl md:text-[32px] font-semibold">
          Most Popular Articles
        </h1>
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {otherBlog.map((b, index) => (
            <picture className="flex-[1] max-h-[337px]" key={index}>
              <Image
                className="rounded-2xl w-full h-full object-cover mb-[25px]"
                src={b.image}
                width={410}
                height={350}
                alt="Blog image"
                priority
                unoptimized
              />
            </picture>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
