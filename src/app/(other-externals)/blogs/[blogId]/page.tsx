"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { blogData } from "../../components/blogs";

const BlogDetail = () => {
  const { blogId } = useParams();
  const blog = blogData.find((b) => b.id === parseInt(blogId as string));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <Image src={blog.image} alt={blog.title} className="w-full h-auto mb-4" />
      <p className="text-lg mb-4">{blog.description}</p>
      <div className="flex items-center mb-4"></div>
      <p>{blog.description}</p>
    </div>
  );
};

export default BlogDetail;
