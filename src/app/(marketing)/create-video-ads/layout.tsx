import Header from "@/domains/external/components/header";
// import Footer from "@/domains/external/components/footer";
import BlogFooter from "@/app/(other-externals)/components/blog-footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <div className="max-w-7xl w-full xl:mx-auto  pt-8 ">
        <BlogFooter />
      </div>
    </div>
  );
}
