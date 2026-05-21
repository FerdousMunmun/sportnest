"use client";

import { useState } from "react";

const allItems = [
  "Easy Online Booking",
  "Prime Sports Locations",
  "Secure Login System",
  "Affordable Pricing",
  "Mobile Friendly Platform",
  "Professional Environment",
];

const WhyChooseUs = () => {

  const [search, setSearch] = useState("");

  const filteredItems = allItems.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="my-20">

      <h2 className="text-3xl font-bold text-center">
        Why Choose SportNest?
      </h2>

      {/* Search Field */}
      <div className="flex justify-center mt-6">
        <input
          type="text"
          placeholder="Search features..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-3 rounded-xl w-[300px] outline-none focus:border-orange-500"
        />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

        {filteredItems.map((item, index) => (

          <div
            key={index}
            className="border rounded-2xl p-6 text-center hover:shadow-lg duration-300"
          >
            <div className="text-4xl mb-4">🏆</div>

            <h3 className="text-xl font-semibold">
              {item}
            </h3>

            <p className="text-gray-500 mt-3">
              SportNest makes sports facility booking simple, fast, and reliable.
            </p>
          </div>

        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;