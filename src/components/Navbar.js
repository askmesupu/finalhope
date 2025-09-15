import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center gap-6 py-4 bg-white/20 backdrop-blur-md fixed top-0 z-50">
      <Link to="/" className="text-white font-semibold hover:text-pink-300">Home</Link>
      <Link to="/english" className="text-white font-semibold hover:text-pink-300">My Love In English</Link>
      <Link to="/bangla" className="text-white font-semibold hover:text-pink-300">My Love In Bangla</Link>
      <Link to="/hindi" className="text-white font-semibold hover:text-pink-300">My Love In Hindi</Link>
      <Link to="/myheart" className="text-white font-semibold hover:text-pink-300">My Heart</Link>
      <Link to="/question" className="text-white font-semibold hover:text-pink-300">Answer My Question</Link>
    </nav>
  );
    }
