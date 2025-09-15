import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function SubpageButton({ to, label }) {
  const navigate = useNavigate();
  const [showOverlay, setShowOverlay] = useState(false);

  const handleClick = () => {
    setShowOverlay(true);
    setTimeout(() => {
      setShowOverlay(false);
      navigate(to);
    }, 1000);
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        className="px-3 md:px-4 py-2 rounded-xl bg-pink-600 text-white shadow-md hover:bg-pink-700 transition text-sm md:text-base"
      >
        {label}
      </motion.button>

      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50"
          >
            <div className="heart-shape w-32 h-32 animate-ping"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
