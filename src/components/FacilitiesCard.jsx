import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { FaUserGroup } from 'react-icons/fa6'

const FacilitiesCard = ({facility}) => {
    const {_id,
facilityName,
location,
category,
slots,
bookingDate,imageUrl,pricePerHour,
description} = facility
  return (
    <div className='p-5 border rounded-2xl'>
       <div className="relative h-60 overflow-hidden ">
        <Image
          src={imageUrl}
          alt={facilityName}
          fill
          className="object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full">
          {category}
        </div>

        <div className="absolute top-4 right-4 bg-white text-orange-500 text-sm font-bold px-4 py-1 rounded-full shadow">
          ${pricePerHour}/hr
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4 ">

        <div>
          <h2 className="text-2xl font-black text-slate-900">
            {facilityName}
          </h2>

          <p className="text-slate-500 mt-1 flex items-center gap-2">
            <CiLocationOn /> {location}
          </p>
        </div>

        <p className="text-slate-600 leading-relaxed">
          {description}
        </p>

        <div className="flex items-center gap-3 text-sm text-slate-500"><FaUserGroup />
          <span>{slots} Slots Available</span>
        </div>

        <Link href={`/all-facilities/${_id}`}><button className="w-full py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold transition">
          Book Now
        </button></Link>
      </div>
    </div>
  )
}

export default FacilitiesCard