// import Header from "@/domains/external/components/header";
// import Footer from "@/domains/external/components/footer";
import BlogFooter from "@/app/(other-externals)/components/blog-footer";
import BlogHeader from "@/app/(other-externals)/components/blogs-header";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <BlogHeader />
      <main>{children}</main>
      <div className="max-w-7xl w-full xl:mx-auto max-lg:px-4 pt-8">
        <BlogFooter />
      </div>
    </div>
  );
}
