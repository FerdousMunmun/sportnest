import FacilitiesCard from '@/components/FacilitiesCard'
import React from 'react'

const AllFacilitiesPage = async () => {
  const res = await fetch('http://localhost:5000/facilities')
  const facilities = await res.json()
  console.log(facilities)
  return (
    <div className='max-w-7xl mx-auto'>
     <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight my-5 text-center">
  All{" "}
  <span className="text-orange-500">
    Facilities
  </span>
</h1>

<div className="grid grid-cols-3 gap-3">
  {
    facilities.map(facility => <FacilitiesCard key={facility._id} facility={facility}/>)
    
  }
</div>
    </div>
  )
}

export default AllFacilitiesPage