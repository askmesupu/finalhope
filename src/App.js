import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MyLoveEnglish from "./pages/MyLoveEnglish";
import MyLoveBangla from "./pages/MyLoveBangla";
import MyLoveHindi from "./pages/MyLoveHindi";
import MyHeart from "./pages/MyHeart";
import AnswerQuestion from "./pages/AnswerQuestion";
import "./index.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="bg-animate min-h-screen relative">
      <header>
        <h1>Supto ❤️ Shiropa</h1>
      </header>
      <Navbar setPage={setPage} />
      {page === "home" && <Home />}
      {page === "english" && <MyLoveEnglish />}
      {page === "bangla" && <MyLoveBangla />}
      {page === "hindi" && <MyLoveHindi />}
      {page === "myheart" && <MyHeart />}
      {page === "question" && <AnswerQuestion />}
    </div>
  );
}

export default App;
