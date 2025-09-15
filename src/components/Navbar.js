import React from "react";
import SubpageButton from "./SubpageButton";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full flex flex-col md:flex-row justify-center items-center gap-3 md:gap-6 p-4 z-20">
      <SubpageButton to="/my-love-english" label="My Love (English)" />
      <SubpageButton to="/my-love-bangla" label="My Love (Bangla)" />
      <SubpageButton to="/my-love-hindi" label="My Love (Hindi)" />
      <SubpageButton to="/my-heart" label="My Heart" />
      <SubpageButton to="/answer-my-question" label="Answer My Question" />
    </nav>
  );
    }
