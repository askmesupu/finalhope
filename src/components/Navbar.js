import React from "react";

export default function Navbar({ setPage }) {
  return (
    <div className="navbar">
      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("english")}>My Love (English)</button>
      <button onClick={() => setPage("bangla")}>My Love (Bangla)</button>
      <button onClick={() => setPage("hindi")}>My Love (Hindi)</button>
      <button onClick={() => setPage("myheart")}>My Heart</button>
      <button onClick={() => setPage("question")}>Answer My Question</button>
    </div>
  );
  }
