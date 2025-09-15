import React from "react";
import { motion } from "framer-motion";

export default function MyHeart() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-red-500 via-pink-600 to-purple-700 relative overflow-hidden">
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 1, 0], y: [-50, -200] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: i * 0.3,
          }}
          className="absolute text-white text-xl"
          style={{ left: `${Math.random() * 100}%`, bottom: "-20px" }}
        >
          Shiropa
        </motion.span>
      ))}
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="text-white text-3xl md:text-5xl font-bold z-10"
      >
        My Heart Beats Only for You ❤️
      </motion.h1>
    </div>
  );
            }
