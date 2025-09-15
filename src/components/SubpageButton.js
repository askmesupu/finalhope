import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function SubpageButton({ to, label }) {
  const navigate = useNavigate();
  const [animating, setAnimating] = useState(false);

  const handleClick = () => {
    setAnimating(true);
    setTimeout(() => {
      navigate(to);
      setAnimating(false);
    }, 1200); // subpage load delay
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="w-full md:w-auto px-4 py-2 md:px-6 md:py-3 bg-white/20 text-white font-semibold rounded-lg text-sm md:text-base transition-all hover:bg-white/30"
      >
        {label}
      </button>

      <AnimatePresence>
        {animating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          >
            {/* Proper Heart Shape */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1.2 }}
              exit={{ scale: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="relative w-32 h-32 md:w-48 md:h-48"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 md:w-24 md:h-24 bg-red-500 rounded-full"></div>
              <div className="absolute top-0 left-0 w-16 h-16 md:w-24 md:h-24 bg-red-500 rounded-full"></div>
              <div className="absolute top-8 md:top-12 left-0 w-32 md:w-48 h-32 md:h-48 bg-red-500 rotate-45 transform origin-top-left"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
