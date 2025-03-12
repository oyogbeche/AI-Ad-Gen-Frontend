import Image from "next/image";
import { useRouter } from "next/router";
import { blogData } from "../../components/blogs";

const BlogDetail = () => {
  const router = useRouter();
  const { blogId } = router.query;
  const blog = blogData.find((b) => b.id === parseInt(blogId as string));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <Image src={blog.image} alt={blog.title} className="w-full h-auto mb-4" />
      <p className="text-lg mb-4">{blog.description}</p>
      <div className="flex items-center mb-4">
        <Image
          src={blog.avatar}
          alt={blog.author}
          className="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <p className="text-sm font-semibold">{blog.author}</p>
          <p className="text-sm text-gray-500">{blog.date}</p>
        </div>
      </div>
      <p>{blog.description}</p>
    </div>
  );
};

export default BlogDetail;
