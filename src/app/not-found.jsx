"use client";

import Link from "next/link";
import { FaHome } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-100 px-6">
      
      <div className="text-center max-w-2xl">
        
        <h1 className="text-8xl md:text-9xl font-extrabold text-green-600">
          404
        </h1>

        <h2 className="mt-6 text-3xl md:text-5xl font-bold text-slate-900">
          Page Not Found
        </h2>

        <p className="mt-5 text-slate-600 text-lg leading-relaxed">
          Oops! The page you are looking for does not exist or has been moved.
          Explore SportNest facilities and continue your sports journey.
        </p>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-all duration-300 shadow-lg shadow-green-600/20"
          >
            <FaHome />
            Back To Home
          </Link>
        </div>

        {/* Decorative Circle */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-green-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-52 h-52 bg-emerald-300 rounded-full blur-3xl opacity-20"></div>
      </div>
    </section>
  );
};

export default NotFoundPage;