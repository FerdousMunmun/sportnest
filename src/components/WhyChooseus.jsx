"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.5 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" },
  };

  return (
    <section className="my-20">
      <h2 className="text-3xl font-bold text-center">
        Why Choose SportNest?
      </h2>

      {/* Search Field */}
      {/* <div className="flex justify-center mt-6">
        <input
          type="text"
          placeholder="Search features..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-3 rounded-xl w-[300px] outline-none focus:border-orange-500"
        />
      </div> */}

      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredItems.map((item, index) => (
          <motion.div
            key={index}
            className="border rounded-2xl p-6 text-center bg-white"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold">{item}</h3>
            <p className="text-gray-500 mt-3">
              SportNest makes sports facility booking simple, fast, and reliable.
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;