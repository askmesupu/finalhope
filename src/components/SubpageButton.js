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
      setAnimating(false); // navigate হওয়ার পর overlay clear
    }, 1000); // animation সময়
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
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          >
            {/* Proper CSS Heart */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1.2 }}
              exit={{ scale: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="relative w-24 h-24 md:w-40 md:h-40"
            >
              <div className="w-full h-full relative transform -rotate-45">
                <div className="absolute top-0 left-1/2 w-1/2 h-1/2 bg-red-500 rounded-full -translate-x-1/2"></div>
                <div className="absolute left-0 top-1/2 w-1/2 h-1/2 bg-red-500 rounded-full -translate-y-1/2"></div>
                <div className="absolute w-full h-full bg-red-500"></div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
