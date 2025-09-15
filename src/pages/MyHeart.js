import React from "react";
import { motion } from "framer-motion";

const words = Array.from({ length: 40 }, () => "Shiropa");

export default function MyHeart() {
  return (
    <div className="w-full min-h-screen overflow-hidden bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-animate relative flex items-center justify-center">
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          initial={{ x: Math.random() * window.innerWidth, y: 600, opacity: 0 }}
          animate={{ y: -50, opacity: 1 }}
          transition={{ duration: 12 + Math.random() * 6, repeat: Infinity, ease: "linear" }}
          className="absolute text-white font-bold text-sm md:text-lg"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
            }
