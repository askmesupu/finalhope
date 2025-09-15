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
    }, 1000); // animation duration
  };

  const tinyHearts = Array.from({ length: 20 });

  return (
    <>
      <button
        onClick={handleClick}
        className="w-full md:w-auto px-4 py-2 md:px-6 md:py-3 bg-white/20 text-white font-semibold rounded-lg text-sm md:text-base transition-all"
      >
        {label}
      </button>

      <AnimatePresence>
        {animating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          >
            {/* Big heart overlay */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="relative w-40 h-40 md:w-60 md:h-60"
            >
              <div
                className="absolute inset-0 bg-red-600/50 rounded-full transform rotate-45"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 35%, 80% 100%, 50% 80%, 20% 100%, 0% 35%)",
                }}
              ></div>

              {/* Floating tiny hearts */}
              {tinyHearts.map((_, idx) => (
                <motion.div
                  key={idx}
                  initial={{ x: 0, y: 0, opacity: 0 }}
                  animate={{
                    x: Math.random() * 80 - 40,
                    y: -Math.random() * 80,
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1 + Math.random() * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random() * 0.2,
                  }}
                  className="absolute w-2 h-2 md:w-3 md:h-3 bg-pink-400 rounded-full"
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
