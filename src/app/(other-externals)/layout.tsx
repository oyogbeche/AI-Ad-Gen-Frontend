import BlogFooter from "./components/blog-footer";
import BlogHeader from "./components/blogs-header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <BlogHeader />
      {children}
      <div className="max-w-7xl w-full xl:mx-auto max-lg:px-4 pt-8">
        <BlogFooter />
      </div>
    </>
  );
}
