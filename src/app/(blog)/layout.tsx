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
    </>
  );
}
