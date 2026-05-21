import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import SimpleSection from "@/components/SimpleSection";
import WhyChooseUs from "@/components/WhyChooseus";

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Banner/>
      <Featured/>
      <WhyChooseUs/>
      <SimpleSection/>
    
      
      
    </div>
  );
}
