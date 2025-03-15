"use client";

import { motion } from "framer-motion";

const EarlyAccess = () => {
  return (
    <motion.div
      className="bg-purple-700 text-white rounded-xl p-6 md:p-8 w-full max-w-lg mt-10 md:mt-16 relative shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-xl md:text-2xl font-bold text-center">
        Upgrade your freelancing business with effortless ad creation!
      </h3>
      <p className="text-center text-gray-200 mt-2">
        Sign up for early access.
      </p>

      {/* Form */}
      <form className="mt-6 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter your name"
          className="p-3 rounded-md text-gray-900 w-full outline-none"
          required
        />
        <input
          type="email"
          placeholder="Enter your email"
          className="p-3 rounded-md text-gray-900 w-full outline-none"
          required
        />
        <input
          type="tel"
          placeholder="Enter your phone number (optional)"
          className="p-3 rounded-md text-gray-900 w-full outline-none"
        />
        <button
          type="submit"
          className="bg-white text-purple-700 font-bold p-3 rounded-md hover:bg-gray-200 transition"
        >
          Get Early Access
        </button>
      </form>
    </motion.div>
  );
};

export default EarlyAccess;
