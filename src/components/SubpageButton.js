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
    }, 1200); // animation duration reduced for smooth mobile performance
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="px-6 py-3 bg-white/30 text-white font-semibold rounded-lg backdrop-blur-md hover:bg-white/50 transition-all"
      >
        {label}
      </button>

      <AnimatePresence>
        {animating && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 10, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 720 }}
              transition={{ duration: 1.2, ease: "linear" }}
              className="w-5 h-5 border-4 border-white rounded-full"
            ></motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
              }
