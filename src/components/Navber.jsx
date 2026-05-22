// 'use client'


// import { Avatar, Button } from '@heroui/react'
// import Link from 'next/link'
// import React from 'react'


// const Navber = () => {






//   const { 
//         data: session, 
//     } = authClient.useSession() 
//     const user = session?.user

//     const handleSignOut = async () => {
//     await authClient.signOut();
//   };
    
//   return (

//     <div className="">
//        <nav className='max-w-7xl mx-auto flex justify-between items-center my-4'>

//       <div className="">
//        <Link href="/" className="flex items-center gap-3">

//   <div className="relative w-12 h-12 rounded-full bg-black flex items-center justify-center overflow-hidden">
    
//     <div className="absolute w-8 h-8 border-4 border-orange-500 rounded-full"></div>

//     <span className="text-white text-lg font-extrabold z-10">
//       SN
//     </span>
//   </div>

//   <div>
//     <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
//       SportNest
//     </h1>

//     <p className="text-[11px] text-slate-500 -mt-1">
//       Sports Facility Booking
//     </p>
//   </div>

// </Link>
//       </div>

     
        
//   <ul className=" flex justify-between items-center gap-3">
//               <li  className="text-[15px] font-semibold tracking-wide text-slate-700 hover:text-orange-500 transition-all duration-300"><Link href={'/'}>Home</Link></li>
//               <li  className="text-[15px] font-semibold tracking-wide text-slate-700 hover:text-orange-500 transition-all duration-300"><Link href={'/all-facilities'}>All Facilities</Link></li>
//               <li  className="text-[15px] font-semibold tracking-wide text-slate-700 hover:text-orange-500 transition-all duration-300"><Link href={'/my-bookings'}>My Bookings</Link></li>
//               <li  className="text-[15px] font-semibold tracking-wide text-slate-700 hover:text-orange-500 transition-all duration-300"><Link href={'/add-facility'}>Add Facility</Link></li>
//               <li  className="text-[15px] font-semibold tracking-wide text-slate-700 hover:text-orange-500 transition-all duration-300"><Link href={'/manage-facilities'}>Manage My Facilities</Link></li>
              
         
// </ul>
     

      
//        < ul className=" flex justify-between gap-4 items-center">
//               <li  className="text-[15px] font-semibold tracking-wide text-slate-700 hover:text-orange-500 transition-all duration-300"><Link href={'/profile'}>Profile</Link></li>
//               {user?<>
//               <li><Avatar>
//                 <Avatar.Image referrerPolicy="no-referrer" alt="John Doe" src={user?.image} />
//                 <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
//               </Avatar></li>
//               <li>
//                 <Button size="sm" onClick={handleSignOut} variant="danger" className={"rounded-none"}>
//                 Logout
//               </Button>
//               </li>
//               </>:
//                 <>
//               <li  className="text-[15px] font-semibold tracking-wide text-slate-700 hover:text-orange-500 transition-all duration-300"><Link href={'/login'}>Login</Link></li>
//               <li  className="text-[15px] font-semibold tracking-wide text-slate-700 hover:text-orange-500 transition-all duration-300"><Link href={'/signup'}>Sign Up</Link></li>
              
              
//               </>
//               }
         
// </ul>


        
    

//     </nav>
//     </div>
    
     
    
//   )
// }

// export default Navber




"use client";

import { useState, useEffect } from "react";
import { authClient } from '@/lib/auth-client'
import { LayoutDashboard, User, LogOut, Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@heroui/react";
import Image from "next/image";
import { MdOutlineSportsCricket, MdSportsHandball } from "react-icons/md";
import { useRouter } from "next/navigation";

const Navber = () => {

const router = useRouter();
 const { 
        data: session, 
    } = authClient.useSession() ;
    const user = session?.user;

    const handleSignOut = async () => {
    await authClient.signOut();
     router.push("/login");
  };
    

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/70 backdrop-blur-md shadow-sm py-2" : "bg-slate-50 py-4"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="p-2 bg-orange-600 rounded-xl group-hover:rotate-12 transition-transform">
                <MdSportsHandball className="w-6 h-6 text-white"/>
              </div>
              <h2 className=" flex font-extrabold text-3xl tracking-tight text-slate-900">Sport<MdOutlineSportsCricket /></h2><span className="font-extrabold text-3xl  text-orange-600">Nest</span>
                
            </Link>
          </div>

          <div className="hidden md:flex gap-8 items-center">
            <Link href="/" className="font-medium text-slate-700 hover:text-orange-600 transition-colors">Home</Link>
            <Link href="/all-facilities" className="font-medium text-slate-700 hover:text-orange-600 transition-colors">All Facilities</Link>
            <Link href="/my-bookings" className="font-medium text-slate-700 hover:text-orange-600 transition-colors">My Bookings</Link>
            <Link href="/add-facility" className="font-medium text-slate-700 hover:text-orange-600 transition-colors">Add Facility</Link>
            <Link href="/manage-facilities" className="font-medium text-slate-700 hover:text-orange-600 transition-colors">Manage My Facilities</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
 {!user ? (
            <>
              <Link href="/login" className="font-medium text-slate-700 hover:text-orange-600 transition-colors">Login</Link>
              <Link href="/signup">

                <Button  className="font-bold rounded-full px-8 shadow-lg shadow-orange-600/20 bg-orange-600">
                  Sign Up
                </Button>
              </Link>
            </>
 ):(

            <div className="relative group">
              <button className="flex items-center gap-3 p-1 rounded-full hover:bg-muted transition-colors border border-transparent hover:border-border">
                <Image
                  width={40}
                  height={40}
                    src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400"
                  alt="avatar"
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-600/10"
                />
                <div className="text-left hidden lg:block">
                  <p className="text-sm font-bold truncate max-w-25">Ferdous Munmun</p>
                  
                </div>
              </button>
              <div className="absolute right-0 top-12 w-56 bg-white border border-slate-200 rounded-2xl shadow-2xl hidden group-hover:flex flex-col py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="px-4 py-3 border-b border-slate-100">
                  <p className="font-bold text-sm">Welcome back!</p>
                  
                </div>
                <Link href="/Add-Facility" className="px-4 py-2 text-sm hover:bg-muted flex items-center gap-3 transition-colors">
                  <LayoutDashboard className="w-4 h-4" /> Add Facility
                </Link>
                <Link href="/manage-facilities" className="px-4 py-2 text-sm hover:bg-muted flex items-center gap-3 transition-colors">
                  <User className="w-4 h-4" /> Manage My Facilities
                </Link>
                <Button onClick={handleSignOut} className="px-4 py-2 text-sm text-red-500 hover:bg-red-50 flex items-center gap-3 transition-colors text-left">
                  <LogOut className="w-4 h-4" /> Log Out
                </Button>
              </div>
            </div>
 )}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-lg hover:bg-muted transition-colors">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 space-y-2 bg-white border-b border-slate-200 animate-in slide-in-from-top duration-300">
          <Link href="/" className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl">Home</Link>
          <Link href="/courses" className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl">Courses</Link>
          <Link href="/add-course" className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl">Add Course</Link>
          <Link href="/dashboard" className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl">Dashboard</Link>
          <div className="pt-4 border-t border-border mt-4">

            <div className="grid grid-cols-2 gap-4">
              <Link href="/login">
                <Button href="/login" variant="bordered" className="rounded-xl">Login</Button>
              </Link>
              <Link href="/signup">
                <Button href="/signup" color="primary" className="rounded-xl">Sign Up</Button>
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <p className="px-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Account</p>
              <Button onClick={handleSignOut} className="block w-full text-left px-4 py-3 text-base font-medium text-red-500 hover:bg-red-50 rounded-xl">Log Out</Button>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navber



