
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import AuthNav from "./components/AuthNav";
import AuthFooter from "./components/AuthFooter";


//import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LIberty Electric",
  description: "Get electrical services",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

 /*  const router = useRouter()
  const isDashboard = router.pathname.startsWith("/dashboard") */

  return (
    
    <html lang="en">
      <body className={inter.className}>

      <div className="flex flex-col min-h-screen items-center gap-8 bg-[#F9FAFB]">
        <AuthNav />
          <main className="">{children}</main>

        <AuthFooter />
        </div>
 
    
        </body>
        
        </html>
  
  );
}
