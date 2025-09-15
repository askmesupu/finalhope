import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-animate flex flex-col items-center justify-center text-center px-4">
      <div className="flex items-center space-x-6">
        <img 
          src="https://i.imgur.com/OGgciNc.png" 
          alt="Bubu" 
          className="w-40 h-40 rounded-full shadow-lg"
        />
        <img 
          src="https://i.imgur.com/8sdznQ1.jpeg" 
          alt="Dudu" 
          className="w-40 h-40 rounded-full shadow-lg"
        />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="mt-10 text-white text-lg md:text-xl max-w-2xl"
      >
        In 2023, Supto first fell in love with Shiropa at first sight. He prayed to God to make her his. After Durga Puja on 20 October 2024, their relationship officially started. Since then, their love grows day by day — simple, true and beautiful.
      </motion.p>
    </div>
  );
            }
