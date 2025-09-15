import React from "react";
import { motion } from "framer-motion";

export default function MyLoveEnglish() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-animate flex items-center justify-center px-6 text-center">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="text-white text-xl md:text-2xl max-w-3xl"
      >
        From the depths of my soul, I know Shiropa is my eternal light. Her smile washes away every sorrow; her presence sets the rhythm of my heart. I love her beyond words, beyond time — today, tomorrow and for always.
