import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-6">
        Supto❤️Shiropa
      </h1>
      <p className="text-lg md:text-xl text-white/90 max-w-2xl">
        In 2023, Supto first fell in love with Shiropa at first sight. He prayed to God to make her his. After Durga Puja on 20 October 2024, their relationship officially started. Since then, their love grows day by day — simple, true and beautiful.
      </p>
      <img
        src="https://i.imgur.com/8sdznQ1.jpeg"
        alt="Bubu & Dudu"
        className="mt-6 w-48 md:w-64 rounded-2xl shadow-lg"
      />
    </div>
  );
}
