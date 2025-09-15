import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function SubpageButton({ to, label }) {
  const navigate = useNavigate();

  const handleClick = () => {
    const overlay = document.createElement("div");
    overlay.className =
      "fixed inset-0 flex items-center justify-center bg-black z-50";
    overlay.innerHTML = `
      <div class="heart-shape bg-red-500 w-32 h-32 animate-ping"></div>
    `;
    document.body.appendChild(overlay);

    setTimeout(() => {
      document.body.removeChild(overlay);
      navigate(to);
    }, 1200);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="px-4 py-2 rounded-xl bg-pink-600 text-white shadow-md hover:bg-pink-700 transition"
    >
      {label}
    </motion.button>
  );
}
