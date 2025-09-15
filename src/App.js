import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyLoveEnglish from "./pages/MyLoveEnglish";
import MyLoveBangla from "./pages/MyLoveBangla";
import MyLoveHindi from "./pages/MyLoveHindi";
import MyHeart from "./pages/MyHeart";
import AnswerMyQuestion from "./pages/AnswerMyQuestion";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/english" element={<MyLoveEnglish />} />
        <Route path="/bangla" element={<MyLoveBangla />} />
        <Route path="/hindi" element={<MyLoveHindi />} />
        <Route path="/myheart" element={<MyHeart />} />
        <Route path="/question" element={<AnswerMyQuestion />} />
      </Routes>
    </Router>
  );
}

export default App;
