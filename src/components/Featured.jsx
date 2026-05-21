import { Button } from "@heroui/react";

import Link from "next/link";
import FacilitiesCard from "./FacilitiesCard";

const Featured = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`)
    const facilities = await res.json()
    console.log(facilities)
    return (
        <div className="mt-10 max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Our Facilities</h1>
                    <p className="text-muted">At SportNest, we provide a modern and user-friendly platform for sports lovers to discover and book the best sports venues with ease. Our goal is to make sports accessible, convenient, and enjoyable for everyone.</p>
                </div>

                <Link href={'/all-facilities'}><Button variant="outline" className={'rounded-none border-orange-600 border-2 text-cyan-500'}>All Destinations</Button></Link>
            </div>


            <div className="grid grid-cols-4 gap-5 mt-10">
                {facilities.map(facility => <FacilitiesCard key={facility._id} facility={facility}/>)}
            </div>

        </div>
    );
};

export default Featured;