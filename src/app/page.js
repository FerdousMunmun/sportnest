import Banner from "@/components/Banner";
import FeaturedCourses from "@/components/FeaturedCourses";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Banner/>
      <FeaturedCourses />
      
      
    </div>
  );
}
