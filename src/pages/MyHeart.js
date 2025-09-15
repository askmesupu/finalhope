import React from "react";
import { motion } from "framer-motion";

export default function MyHeart() {
  const words = Array.from({ length: 100 }, () => "Shiropa");
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-animate relative overflow-hidden">
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, opacity: 0 }}
          animate={{ y: -50, opacity: 1 }}
          transition={{ duration: 10 + Math.random() * 10, repeat: Infinity }}
          className="absolute text-white font-bold"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
                   }
