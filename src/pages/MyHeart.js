import React, { useEffect, useState } from "react";

export default function MyHeart() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    // Generate 500 floating Shiropa words
    const newWords = Array.from({ length: 500 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 14 + 12, // 12px to 26px
      speed: Math.random() * 1 + 0.2,
    }));
    setWords(newWords);

    const interval = setInterval(() => {
      setWords((prevWords) =>
        prevWords.map((word) => ({
          ...word,
          y: word.y - word.speed,
          x: word.x + Math.sin(word.y / 50) * 0.5, // slight sway
        }))
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 overflow-hidden">
      {/* Floating Shiropa words */}
      {words.map((word, index) => (
        <span
          key={index}
          style={{
            position: "absolute",
            left: word.x,
            top: word.y,
            fontSize: word.size,
            color: "rgba(255,255,255,0.7)",
            fontWeight: "bold",
            pointerEvents: "none",
            whiteSpace: "nowrap",
          }}
        >
          Shiropa
        </span>
      ))}

      {/* Bottom small text */}
      <div className="absolute bottom-5 w-full text-center text-white text-sm md:text-lg font-semibold z-50">
        In my every heart beat there is one name - Shiropa
      </div>
    </div>
  );
                      }
