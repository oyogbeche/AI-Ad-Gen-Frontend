import Link from "next/link";
import Header from "@/domains/external/components/header";
import Footer from "@/domains/external/components/footer";
export default function NotFound() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center h-[70vh] py-2">
        <h2 className="text-4xl font-bold mb-4">404 - Page Not Found</h2>
        <p className="text-xl mb-4">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return Home
        </Link>
      </div>
      <Footer />
    </>
  );
}
