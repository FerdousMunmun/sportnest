"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">
      
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Logo & Description */}
        <div>
          <h2 className="text-3xl font-extrabold text-green-500">
            SportNest
          </h2>

          <p className="mt-4 text-slate-400 leading-relaxed">
            SportNest is a modern sports facility booking platform
            where users can explore, book, and manage sports venues
            easily and efficiently.
          </p>

          <div className="flex items-center gap-4 mt-6">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-slate-400">
            <li>
              <Link href="/" className="hover:text-green-500 transition-colors">
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/facilities"
                className="hover:text-green-500 transition-colors"
              >
                All Facilities
              </Link>
            </li>

            <li>
              <Link
                href="/my-bookings"
                className="hover:text-green-500 transition-colors"
              >
                My Bookings
              </Link>
            </li>

            <li>
              <Link
                href="/add-facility"
                className="hover:text-green-500 transition-colors"
              >
                Add Facility
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-bold mb-5">
            Services
          </h3>

          <ul className="space-y-3 text-slate-400">
            <li className="hover:text-green-500 transition-colors cursor-pointer">
              Online Booking
            </li>

            <li className="hover:text-green-500 transition-colors cursor-pointer">
              Facility Management
            </li>

            <li className="hover:text-green-500 transition-colors cursor-pointer">
              Event Scheduling
            </li>

            <li className="hover:text-green-500 transition-colors cursor-pointer">
              Membership Access
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold mb-5">
            Contact Info
          </h3>

          <div className="space-y-4 text-slate-400">
            <p>📍 Dhaka, Bangladesh</p>

            <p>📞 +880 1234-567890</p>

            <p>📧 support@sportnest.com</p>

            <p>🕒 Open: 9AM - 11PM</p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <p className="text-slate-500 text-sm text-center md:text-left">
            © 2026 SportNest. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-slate-500">
            <Link href="#" className="hover:text-green-500 transition-colors">
              Privacy Policy
            </Link>

            <Link href="#" className="hover:text-green-500 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;