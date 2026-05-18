"use client";

import { useState, useEffect } from "react";


import Link from "next/link";
import { Button } from "@heroui/react";
import Image from "next/image";
import { CiDumbbell, CiMenuFries } from "react-icons/ci";
import { FaExpandArrowsAlt, FaRegUser } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsCalendarCheck } from "react-icons/bs";

 
const Navber = () => {




const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const user = true;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow-sm py-2"
          : "bg-slate-50 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="p-2 bg-green-600 rounded-2xl group-hover:rotate-12 transition-transform">
               <CiDumbbell />
              </div>

              <div>
                <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
                  SportNest
                </h1>

                <p className="text-[11px] text-slate-500 -mt-1">
                  Sports Facility Booking
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="font-medium text-slate-700 hover:text-green-600 transition-colors"
            >
              Home
            </Link>

            <Link
              href="/courses"
              className="font-medium text-slate-700 hover:text-green-600 transition-colors"
            >
              All Facilities
            </Link>

            <Link
              href="/add-course"
              className="font-medium text-slate-700 hover:text-green-600 transition-colors"
            >
              My Bookings
            </Link>

            <Link
              href="/dashboard"
              className="font-medium text-slate-700 hover:text-green-600 transition-colors"
            >
              Add Facility
            </Link>

            <Link
              href="/manage-facilities"
              className="font-medium text-slate-700 hover:text-green-600 transition-colors"
            >
              Manage Facilities
            </Link>
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">
            {!user ? (
              <>
                <Link
                  href="/login"
                  className="font-medium text-slate-700 hover:text-green-600 transition-colors"
                >
                  Login
                </Link>

                <Link href="/signup">
                  <Button
                    className="bg-green-600 text-white rounded-full px-8 font-bold shadow-lg shadow-green-600/20"
                  >
                    Join Now
                  </Button>
                </Link>
              </>
            ) : (
              <div className="relative group">
                <button className="flex items-center gap-3 p-1 rounded-full hover:bg-slate-100 transition-colors">
                  <Image
                    width={40}
                    height={40}
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400"
                    alt="user"
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-green-600/10"
                  />

                  <div className="text-left hidden lg:block">
                    <p className="text-sm font-bold">
                      Sport Player
                    </p>

                    <p className="text-[10px] text-slate-500">
                      Member
                    </p>
                  </div>
                </button>

                {/* Dropdown */}
                <div className="absolute right-0 top-12 w-56 bg-white border border-slate-200 rounded-2xl shadow-2xl hidden group-hover:flex flex-col py-2 z-50">
                  <div className="px-4 py-3 border-b border-slate-100">
                    <p className="font-bold text-sm">
                      Welcome Back!
                    </p>

                    <p className="text-xs text-slate-500 truncate">
                      sportnest@gmail.com
                    </p>
                  </div>

                  <Link
                    href="/dashboard"
                    className="px-4 py-2 text-sm hover:bg-slate-50 flex items-center gap-3 transition-colors"
                  >
                    <LuLayoutDashboard />
                    Dashboard
                  </Link>

                  <Link
                    href="/my-bookings"
                    className="px-4 py-2 text-sm hover:bg-slate-50 flex items-center gap-3 transition-colors"
                  >
                    <BsCalendarCheck />
                    My Bookings
                  </Link>

                  <Link
                    href="/profile"
                    className="px-4 py-2 text-sm hover:bg-slate-50 flex items-center gap-3 transition-colors"
                  >
                   <FaRegUser />
                    Profile
                  </Link>

                  <button
                    className="px-4 py-2 text-sm text-red-500 hover:bg-red-50 flex items-center gap-3 transition-colors text-left"
                  >
                    <IoLogOutOutline />
                    Log Out
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {isMenuOpen ? (
               <FaExpandArrowsAlt />
              ) : (
                <CiMenuFries />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 bg-white border-b border-slate-200 space-y-2">
          <Link
            href="/"
            className="block px-4 py-3 rounded-xl hover:bg-slate-50"
          >
            Home
          </Link>

          <Link
            href="/facilities"
            className="block px-4 py-3 rounded-xl hover:bg-slate-50"
          >
            All Facilities
          </Link>

          <Link
            href="/my-bookings"
            className="block px-4 py-3 rounded-xl hover:bg-slate-50"
          >
            My Bookings
          </Link>

          <Link
            href="/add-facility"
            className="block px-4 py-3 rounded-xl hover:bg-slate-50"
          >
            Add Facility
          </Link>

          <Link
            href="/manage-facilities"
            className="block px-4 py-3 rounded-xl hover:bg-slate-50"
          >
            Manage Facilities
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navber