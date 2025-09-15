import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-animate flex flex-col items-center justify-center text-center px-4 md:px-6">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img 
          src="https://i.imgur.com/OGgciNc.png" 
          alt="Bubu" 
          className="w-32 md:w-40 h-32 md:h-40 rounded-full object-cover shadow-lg"
        />
        <img 
          src="https://i.imgur.com/8sdznQ1.jpeg" 
          alt="Dudu" 
          className="w-32 md:w-40 h-32 md:h-40 rounded-full object-cover shadow-lg"
        />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="mt-10 text-white text-base md:text-lg max-w-2xl"
      >
        In 2023, Supto first fell in love with Shiropa at first sight. He prayed to God to make her his. After Durga Puja on 20 October 2024, their relationship officially started. Since then, their love grows day by day — simple, true and beautiful.
      </motion.p>
    </div>
  );
          }
