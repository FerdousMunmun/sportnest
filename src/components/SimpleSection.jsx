// const SimpleSection = () => {
//   return (
//     <section className="my-20 text-center">
//       <h2 className="text-4xl font-bold">
//         Welcome to SportNest
//       </h2>

//       <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
//         Book your favorite sports facilities easily and enjoy the best playing experience.
//       </p>

//       <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg">
//         Get Started
//       </button>
//     </section>
//   );
// };

// export default SimpleSection;



"use client";

import { motion } from "framer-motion";

const SimpleSection = () => {
  return (
    <section className="my-20 text-center">
      {/* Animated Heading */}
      <motion.h2
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Welcome to SportNest
      </motion.h2>

      {/* Animated Paragraph */}
      <motion.p
        className="mt-4 text-gray-500 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        Book your favorite sports facilities easily and enjoy the best playing experience.
      </motion.p>

      {/* Animated Button */}
      <motion.button
        className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 120 }}
        whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
        whileTap={{ scale: 0.95 }}
      >
        Get Started
      </motion.button>
    </section>
  );
};

export default SimpleSection;