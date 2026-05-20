import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white mt-20">
      
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-3">
            
            <div className="w-12 h-12 rounded-full bg-black border-4 border-orange-500 flex items-center justify-center">
              <span className="text-white font-black text-lg">
                SN
              </span>
            </div>

            <div>
              <h2 className="text-3xl font-black text-white">
                SportNest
              </h2>

              <p className="text-sm text-slate-400">
                Sports Facility Booking
              </p>
            </div>
          </div>

          <p className="mt-6 text-slate-400 leading-relaxed">
            SportNest helps sports lovers discover, book, and manage premium sports facilities with a fast and seamless experience.
          </p>

          <div className="flex items-center gap-4 mt-6">
            
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-orange-500 transition flex items-center justify-center"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-orange-500 transition flex items-center justify-center"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-orange-500 transition flex items-center justify-center"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-orange-500 transition flex items-center justify-center"
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
              <Link href="/" className="hover:text-orange-500 transition">
                Home
              </Link>
            </li>

            <li>
              <Link href="/facilities" className="hover:text-orange-500 transition">
                All Facilities
              </Link>
            </li>

            <li>
              <Link href="/my-bookings" className="hover:text-orange-500 transition">
                My Bookings
              </Link>
            </li>

            <li>
              <Link href="/add-facility" className="hover:text-orange-500 transition">
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
            <li className="hover:text-orange-500 transition cursor-pointer">
              Facility Booking
            </li>

            <li className="hover:text-orange-500 transition cursor-pointer">
              Venue Management
            </li>

            <li className="hover:text-orange-500 transition cursor-pointer">
              Sports Scheduling
            </li>

            <li className="hover:text-orange-500 transition cursor-pointer">
              Online Reservations
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold mb-5">
            Contact Us
          </h3>

          <div className="space-y-4 text-slate-400">
            <p>📍 Dhaka, Bangladesh</p>

            <p>📞 +880 1234-567890</p>

            <p>📧 support@sportnest.com</p>

            <p>🕒 Open Daily: 8AM - 12AM</p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <p className="text-slate-500 text-sm">
            © 2026 SportNest. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-slate-500">
            <Link href="#" className="hover:text-orange-500 transition">
              Privacy Policy
            </Link>

            <Link href="#" className="hover:text-orange-500 transition">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;