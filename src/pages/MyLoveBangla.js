import React from "react";
import { motion } from "framer-motion";

export default function MyLoveBangla() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-animate flex items-center justify-center px-6 text-center">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="text-white text-xl md:text-2xl max-w-3xl"
      >
        শোনো সুহাসিনী নামের মৃদু আলো যেন আমার অন্তরের প্রতিটি অন্ধকার কুঠুরি জুড়ে এক অপরূপ প্রদীপ প্রজ্বলিত করেছে। তাঁর হাসি শুধু মুখের অলংকার নয়, তা এক অদৃশ্য মন্ত্র, যার ছোঁয়ায় হৃদয় নত হয়, মন পবিত্র হয়। আমি যেন তাঁর সান্নিধ্যে এসে বুঝেছি, প্রেম কেবল আকাঙ্ক্ষা নয় প্রেম এক মহাযজ্ঞ, যেখানে আত্মা নিবেদন হয় সত্যের অগ্নিতে। সুহাসিনীর প্রতি আমার ভালোবাসা তাই ক্ষণিক অনুভূতি নয়, এটি চিরন্তন শাশ্বত রাগিণী, যার প্রতিটি স্বর ভক্তির মাধুর্যে ভিজে থাকে। তাঁর দৃষ্টির ভিতরে আমি খুঁজে পাই সৃষ্টির নিগূঢ় রহস্য, তাঁর স্নিগ্ধ উপস্থিতিতে অনুভব করি দিবারাত্রির সমাহিত শান্তি। যেন তিনি আমার জীবনযাত্রার পরম সাধনা, যার মাঝে মিশে আছে সৌন্দর্যের পূর্ণতা ও আধ্যাত্মিকতার মহিমা।
      </motion.p>
    </div>
  );
          }
