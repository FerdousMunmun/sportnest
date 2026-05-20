import { DeleteAlert } from '@/components/DeleteAlert'
import EditModal from '@/components/EditModal'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { FaUserGroup } from 'react-icons/fa6'

const FacilitiesDetailsPage = async ({params}) => {
    const {id} = await params
    const res = await fetch(`http://localhost:5000/facilities/${id}`)
    const facility = await res.json()
     const {_id,
facilityName,
location,
category,
slots,
bookingDate,imageUrl,price,
description} = facility
  return (
     <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex  items-center gap-3 justify-end mt-5 mb-3">
        <EditModal facility={facility} />
        <DeleteAlert facility={facility}/>
        {/* <DeleteAlert destination={destination}/> */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Side Image */}
        <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src={imageUrl}
            alt={facilityName}
            fill
            className="object-cover"
          />

          <div className="absolute top-5 left-5 bg-orange-500 text-white px-5 py-2 rounded-full font-bold text-sm">
            {category}
          </div>
        </div>

        {/* Right Side Content */}
        <div className="space-y-6">

          <div>
            <h1 className="text-3xl font-black text-slate-900 leading-tight">
              {facilityName}
            </h1>

            <p className="text-lg text-slate-500 mt-3 flex gap-2">
             <CiLocationOn />{location}
            </p>
          </div>

          <p className="text-slate-600 leading-relaxed text-lg">
            {description}
          </p>

          {/* Info Box */}
          <div className="grid grid-cols-2 gap-5">

            <div className="bg-slate-100 rounded-2xl p-5">
              <h3 className="text-sm text-slate-500 font-semibold">
                Booking Date
              </h3>

              <p className="text-xl font-black text-slate-900 mt-2">
                {bookingDate}
              </p>
            </div>

            <div className="bg-slate-100 rounded-2xl p-5">
              <h3 className="text-sm text-slate-500 font-semibold">
                Slots Available
              </h3>

              <p className="text-xl font-black text-slate-900 mt-2 flex gap-2 items-center">
                <FaUserGroup />
                {slots}
              </p>
            </div>

            <div className="bg-slate-100 rounded-2xl p-5 col-span-2">
              <h3 className="text-sm text-slate-500 font-semibold">
                Price Per Hour
              </h3>

              <p className="text-xl font-black text-orange-500 mt-2">
                ${price}
              </p>
            </div>
          </div>

          {/* Button */}
          <Link href={''}><button className="w-full md:w-auto px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition duration-300 shadow-lg">
            Book This Facility
          </button></Link>

        </div>
      </div>
    </section>
  )
}

export default FacilitiesDetailsPage