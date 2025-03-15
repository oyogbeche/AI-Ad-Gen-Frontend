"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

const EarlyAccess = () => {
  const router = useRouter();

  // State for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // State for error messages
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation: Check required fields
    if (!name.trim() || !email.trim()) {
      setError("Please fill in all required fields (name & email).");
      return;
    }

    // Clear error and redirect
    setError("");
    router.push("/signup"); // Change "/signup" to any route you want
  };

  return (
    <div className="w-full bg-[#520052]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Column: Image */}
        <div className="flex items-center justify-center">
          <Image
            src="/early-access.svg" // Ensure this file is in /public
            alt="Early Access Visual"
            width={450}
            height={400}
            className="object-cover"
            priority
          />
        </div>

        {/* Right Column: Form */}
        <motion.div
          className="flex flex-col items-center justify-center p-6 md:p-8"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-white text-center">
            Upgrade your freelancing business with effortless ad creation!
          </h3>
          <p className="text-center text-gray-200 mt-2">Sign up for early access.</p>

          {/* Error Message */}
          {error && (
            <div className="bg-red-500 text-white p-2 mt-4 rounded">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4 w-full max-w-md">
            <input
              type="text"
              placeholder="Enter your name"
              className="p-3 rounded-md text-gray-900 w-full outline-none bg-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-md text-gray-900 w-full outline-none bg-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Enter your phone number (optional)"
              className="p-3 rounded-md text-gray-900 w-full outline-none bg-white"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button
              type="submit"
              className="bg-[#CF54CF] text-white font-bold px-4 py-2 text-sm rounded-md hover:bg-[#A63EA6] transition self-start"
            >
              Get Early Access
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default EarlyAccess;
