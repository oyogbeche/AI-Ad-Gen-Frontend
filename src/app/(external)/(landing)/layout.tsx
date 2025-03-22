import BlogFooter from "@/app/(other-externals)/components/blog-footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <div className="max-w-7xl w-full xl:mx-auto pt-8">
        <BlogFooter />
      </div>
    </>
  );
}
