import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MyLoveEnglish from "./pages/MyLoveEnglish";
import MyLoveBangla from "./pages/MyLoveBangla";
import MyLoveHindi from "./pages/MyLoveHindi";
import MyHeart from "./pages/MyHeart";
import AnswerMyQuestion from "./pages/AnswerMyQuestion";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myloveenglish" element={<MyLoveEnglish />} />
          <Route path="/mylovebangla" element={<MyLoveBangla />} />
          <Route path="/mylovehindi" element={<MyLoveHindi />} />
          <Route path="/myheart" element={<MyHeart />} />
          <Route path="/answermyquestion" element={<AnswerMyQuestion />} />
        </Routes>
      </div>
    </Router>
  );
}
