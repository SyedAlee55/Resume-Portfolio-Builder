import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import resume1 from "../assets/resume1.png";
import resume2 from "../assets/resume2.png";
import resume3 from "../assets/resume3.png";

const images = [resume1, resume2, resume3];

export default function ResumeCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const frontVariants = {
    enter: { opacity: 0, scale: 0.8, y: 30 },
    center: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.8, y: -30 },
  };

  const prevIndex = (index - 1 + images.length) % images.length;
  const nextIndex = (index + 1) % images.length;

  return (
    <div className="relative w-64 h-96 mx-auto">
      {/* LEFT BACK CARD */}
      <div className="absolute w-56 h-80 top-4 left-0 bg-white dark:bg-gray-700 rounded-xl shadow-lg rotate-[-10deg]">
        <img
          src={images[prevIndex]}
          alt="back left"
          className="w-full h-full object-contain rounded-xl"
        />
      </div>

      {/* RIGHT BACK CARD */}
      <div className="absolute w-56 h-80 top-4 right-0 bg-white dark:bg-gray-700 rounded-xl shadow-lg rotate-[10deg]">
        <img
          src={images[nextIndex]}
          alt="back right"
          className="w-full h-full object-contain rounded-xl"
        />
      </div>

      {/* FRONT CARD */}
      <AnimatePresence>
        <motion.div
          key={index}
          className="absolute w-64 h-96 top-0 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 rounded-xl shadow-2xl"
          initial="enter"
          animate="center"
          exit="exit"
          variants={frontVariants}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <img
            src={images[index]}
            alt="front"
            className="w-full h-full object-contain rounded-xl"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
