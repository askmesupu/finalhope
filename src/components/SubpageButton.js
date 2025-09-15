import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function SubpageButton({ to, label }) {
  const navigate = useNavigate();
  const [animating, setAnimating] = useState(false);

  const handleClick = () => {
    setAnimating(true);

    // ছোট delay দিয়ে navigate হবে, তারপর overlay clear হবে
    setTimeout(() => {
      navigate(to);
      setAnimating(false);
    }, 800);
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
            {/* ✅ Perfect Heart Shape (SVG) */}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="red"
              initial={{ scale: 0 }}
              animate={{ scale: 1.2 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="w-24 h-24 md:w-40 md:h-40"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.74 0 3.41 1 4.22 2.44h.56C13.09 5 14.76 4 16.5 4 19 4 21 6 21 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </motion.svg>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
