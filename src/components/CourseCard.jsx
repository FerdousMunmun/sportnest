import { Button, Chip } from "@heroui/react";

import Image from "next/image";
import Link from "next/link";
import { BiBookOpen } from "react-icons/bi";
import { CiClock2, CiLocationOn } from "react-icons/ci";
import { FaCheckToSlot } from "react-icons/fa6";
import { MdSportsMartialArts } from "react-icons/md";

const CourseCard = ({ course }) => {
    const { _id, facilityName, category, location, players, slots, pricePerHour } = course;
    return (
        <div
            className="group flex flex-col bg-white rounded-4xl border border-slate-200 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
            <div className="relative overflow-hidden aspect-16/10">
                <Image
                    alt="Facility Image"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    src={course.image}
                    fill
                />
                <div className="absolute top-4 right-4">
                    <Chip
                        color="primary"
                        variant="solid"
                        className="font-bold shadow-lg shadow-blue-600/20"
                    >
                        {category}
                    </Chip>
                </div>
            </div>
            <div className="p-8 flex flex-col grow space-y-4">
                <div className="space-y-2">
                    <Link href={`/courses/${_id}`}>
                        <h3 className="text-xl font-bold leading-tight line-clamp-2 hover:text-green-600 transition-colors">
                            {facilityName}
                        </h3>
                    </Link>
                    <p className="text-sm text-slate-500 font-medium flex items-center gap-1">
                        By <span className="text-slate-900">{category}</span>
                    </p>
                </div>

                <div className="flex items-center gap-4 text-xs text-slate-500 font-bold">
                    <span className="flex items-center gap-1">
                        <CiLocationOn /> {location}
                    </span>
                    <span className="flex items-center gap-1">
                        <MdSportsMartialArts /> {players}
                    </span>
                    <span className="flex items-center gap-1">
                        <FaCheckToSlot /> {slots}
                    </span>
                </div>

                <div className="pt-6 mt-auto border-t border-slate-100 flex justify-between items-center">
                    <span className="text-2xl font-black text-green-600">${pricePerHour}</span>

                    <Button
                        variant="flat"
                        color="primary"
                        className="font-bold rounded-xl px-6 bg-green-600 text-white"
                    >
                        Book Now
                    </Button>

                </div>
            </div>
        </div>
    );
};

export default CourseCard;