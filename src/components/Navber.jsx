'use client'

import { authClient } from '@/lib/auth-client'
import { Avatar, Button } from '@heroui/react'
import Link from 'next/link'
import React from 'react'

const Navber = () => {
  const { 
        data: session, 
    } = authClient.useSession() 
    const user = session?.user

    const handleSignOut = async () => {
    await authClient.signOut();
  };
    
  return (

    <div className="">
       <nav className='max-w-7xl mx-auto flex justify-between items-center my-4'>

      <div className="">
       <Link href="/" className="flex items-center gap-3">

  <div className="relative w-12 h-12 rounded-full bg-black flex items-center justify-center overflow-hidden">
    
    <div className="absolute w-8 h-8 border-4 border-orange-500 rounded-full"></div>

    <span className="text-white text-lg font-extrabold z-10">
      SN
    </span>
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

     
        
  <ul className=" flex justify-between items-center gap-3">
              <li  className="text-[15px] font-semibold tracking-wide text-slate-700 hover:text-orange-500 transition-all duration-300"><Link href={'/'}>Home</Link></li>
              <li  className="text-[15px] font-semibold tracking-wide text-slate-700 hover:text-orange-500 transition-all duration-300"><Link href={'/all-facilities'}>All Facilities</Link></li>
              <li  className="text-[15px] font-semibold tracking-wide text-slate-700 hover:text-orange-500 transition-all duration-300"><Link href={'/my-bookings'}>My Bookings</Link></li>
              <li  className="text-[15px] font-semibold tracking-wide text-slate-700 hover:text-orange-500 transition-all duration-300"><Link href={'/add-facility'}>Add Facility</Link></li>
              <li  className="text-[15px] font-semibold tracking-wide text-slate-700 hover:text-orange-500 transition-all duration-300"><Link href={'/manage-facilities'}>Manage My Facilities</Link></li>
              
         
</ul>
     

      
       < ul className=" flex justify-between gap-4 items-center">
              <li  className="text-[15px] font-semibold tracking-wide text-slate-700 hover:text-orange-500 transition-all duration-300"><Link href={'/profile'}>Profile</Link></li>
              {user?<>
              <li><Avatar>
                <Avatar.Image referrerPolicy="no-referrer" alt="John Doe" src={user?.image} />
                <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
              </Avatar></li>
              <li>
                <Button size="sm" onClick={handleSignOut} variant="danger" className={"rounded-none"}>
                Logout
              </Button>
              </li>
              </>:
                <>
              <li  className="text-[15px] font-semibold tracking-wide text-slate-700 hover:text-orange-500 transition-all duration-300"><Link href={'/login'}>Login</Link></li>
              <li  className="text-[15px] font-semibold tracking-wide text-slate-700 hover:text-orange-500 transition-all duration-300"><Link href={'/signup'}>Sign Up</Link></li>
              
              
              </>
              }
         
</ul>
    

    </nav>
    </div>
    
     
    
  )
}

export default Navber