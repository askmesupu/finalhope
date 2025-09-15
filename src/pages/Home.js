import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-animate bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 flex flex-col items-center px-4 pt-28 text-center">
      <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-6 z-50">
        Supto❤️Shiropa
      </h1>

      <p className="text-sm md:text-lg text-white/90 max-w-xl mb-6 z-50">
        In 2023, Supto first fell in love with Shiropa at first sight. He prayed to God to make her his. After Durga Puja on 20 October 2024, their relationship officially started. Since then, their love grows day by day — simple, true and beautiful.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-10 z-50">
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
    </div>
  );
}
