import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-animate bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 flex flex-col items-center px-4 pt-28">
      {/* Headline */}
      <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-4 text-center z-50">
        Supto❤️Shiropa
      </h1>

      {/* Content paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="text-sm md:text-lg text-white/90 max-w-xl mb-8 text-center z-50"
      >
        In 2023, Supto first fell in love with Shiropa at first sight. He prayed to God to make her his. After Durga Puja on 20 October 2024, their relationship officially started. Since then, their love grows day by day — simple, true and beautiful.
      </motion.p>

      {/* Bubu & Dudu pics */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10 z-50">
        <img
          src="https://i.imgur.com/8sdznQ1.jpeg"
          alt="Bubu"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg"
        />
        <img
          src="https://i.imgur.com/OGgciNc.png"
          alt="Dudu"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg"
        />
      </div>

      {/* Subpage buttons */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 z-50">
        <button className="px-3 md:px-4 py-2 rounded-xl bg-pink-600 text-white shadow-md hover:bg-pink-700 transition text-sm md:text-base">
          Home
        </button>
        <button className="px-3 md:px-4 py-2 rounded-xl bg-pink-600 text-white shadow-md hover:bg-pink-700 transition text-sm md:text-base">
          My Love In English
        </button>
        <button className="px-3 md:px-4 py-2 rounded-xl bg-pink-600 text-white shadow-md hover:bg-pink-700 transition text-sm md:text-base">
          My Love In Bangla
        </button>
        <button className="px-3 md:px-4 py-2 rounded-xl bg-pink-600 text-white shadow-md hover:bg-pink-700 transition text-sm md:text-base">
          My Love In Hindi
        </button>
        <button className="px-3 md:px-4 py-2 rounded-xl bg-pink-600 text-white shadow-md hover:bg-pink-700 transition text-sm md:text-base">
          My Heart
        </button>
        <button className="px-3 md:px-4 py-2 rounded-xl bg-pink-600 text-white shadow-md hover:bg-pink-700 transition text-sm md:text-base">
          Answer My Question
        </button>
      </div>
    </div>
  );
          }
