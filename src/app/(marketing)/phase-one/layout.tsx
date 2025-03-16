import Header from "@/domains/external/components/header";
import Footer from "@/domains/external/components/footer";

export default function MarketingLayout({ children }: { children: React.ReactNode }) { 
  return ( 
    <div> 
      <Header /> 
      <main>{children}</main> 
      <Footer /> 
    </div> 
  ); 
}
