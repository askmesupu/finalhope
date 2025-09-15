import React, { useState } from "react";
import { motion } from "framer-motion";

export default function AnswerMyQuestion() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupImg, setPopupImg] = useState("");

  const handleYes = () => {
    setPopupImg("https://i.imgur.com/nXvrTyh.jpeg");
    setShowPopup(true);
  };

  const handleNo = () => {
    setPopupImg("https://i.imgur.com/tpIx24B.png");
    setShowPopup(true);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-animate flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-white text-3xl mb-6">Will you stay forever with me?</h1>
      <div className="flex gap-8">
        <motion.button 
          whileHover={{ scale: 1.1 }} 
          className="px-6 py-3 bg-green-400 rounded-lg text-white font-semibold"
          onClick={handleYes}
        >
          Yes
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          className="px-6 py-3 bg-red-400 rounded-lg text-white font-semibold"
          onMouseEnter={handleNo}
        >
          No
        </motion.button>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 text-center">
            {popupImg === "https://i.imgur.com/nXvrTyh.jpeg" && (
              <p className="mb-2 text-center font-bold">I love you baby</p>
            )}
            <img src={popupImg} alt="popup" className="w-64 h-64 object-cover mx-auto"/>
            <button 
              className="mt-4 px-4 py-2 bg-gray-800 text-white rounded"
              onClick={() => setShowPopup(false)}
            >Close</button>
          </div>
        </div>
      )}
    </div>
  );
    }
