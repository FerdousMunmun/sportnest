"use client";

import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative bg-gradient-to-r from-green-600 to-emerald-500 text-white overflow-hidden my-4">
      
      <div className="max-w-7xl mx-auto px-6 py-28 flex flex-col items-center text-center">
        
        <p className="uppercase tracking-[6px] text-sm font-semibold text-green-100 mb-4">
          SportNest
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-4xl">
          Book Your Favorite Sports Facility Anytime
        </h1>

        <p className="mt-6 text-lg md:text-xl text-green-50 max-w-2xl">
          Discover premium sports venues, manage bookings easily, 
          and enjoy a seamless sports facility booking experience with SportNest.
        </p>

        <div className="mt-10 flex items-center gap-4">
          <Link
            href="/facilities"
            className="px-8 py-4 bg-white text-green-700 font-bold rounded-full hover:bg-green-100 transition-all duration-300 shadow-lg"
          >
            Explore Facilities
          </Link>
        </div>
      </div>

      {/* Background Blur Effect */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Banner;