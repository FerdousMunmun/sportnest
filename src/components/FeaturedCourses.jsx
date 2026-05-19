import { Button } from "@heroui/react";



import { fetchCourses, fetchFeaturedCourses } from "@/lib/courses/data";
import { FaArrowRight } from "react-icons/fa";

import FeaturedCard from "./FeaturedCard";


const FeaturedCourses = async () => {
    const courses = await fetchFeaturedCourses();
    // console.log(courses);

    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                    <div className="space-y-4">
                        <h2 className="text-green-600 font-bold uppercase tracking-widest text-sm">Top Wanted</h2>
                        <h3 className="text-4xl font-extrabold text-slate-900">Our Facilities</h3>
                        <p className="text-slate-500 max-w-xl">
                            Discover top-quality sports facilities built for champions — book your favorite venue, play with confidence, and experience seamless sports management with SportNest.
                        </p>
                    </div>
                    <Button
                        variant="flat"
                        color="primary"
                        className="rounded-full font-bold group"
                    >
                        View All Facilities <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {
                        courses?.map(course => <FeaturedCard key={course?._id} course={course} />)
                    }

                </div>
            </div>
        </section>
    );
};

export default FeaturedCourses;