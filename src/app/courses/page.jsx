import CourseCard from "@/components/CourseCard";
import CoursesHeader from "@/components/CoursesHeader";
import { fetchCourses } from "@/lib/courses/data";
import { Button } from "@heroui/react";
import { BiBookOpen } from "react-icons/bi";
import { IoFilterOutline } from "react-icons/io5";
import { MdOutlineSportsHandball } from "react-icons/md";


   


const CoursesPage= async() => {
    const courses = await fetchCourses();
    console.log(courses)
  return (
    <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <CoursesHeader />

            <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <MdOutlineSportsHandball />
                        All Facilities
                    </h2>
                    <Button
                        variant="flat"
                        startContent={<IoFilterOutline />}
                        className="rounded-full font-bold"
                    >
                        Filters
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        courses?.map((course) => <CourseCard key={course._id} course={course} />
                        )
                    }
                </div>


            </main>
        </div>
  )
}

export default CoursesPage