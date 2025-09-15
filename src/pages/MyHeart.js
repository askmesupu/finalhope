import React from "react";
import { motion } from "framer-motion";

export default function MyHeart() {
  const words = Array.from({ length: 100 }, () => "Shiropa");

  return (
    <div className="w-full min-h-screen overflow-hidden bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-animate relative flex items-center justify-center">
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight,
            opacity: 0,
          }}
          animate={{
            y: -50,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          className={`absolute text-white font-bold text-xs md:text-sm`}
          style={{ pointerEvents: "none" }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
