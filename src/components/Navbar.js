import React from "react";
import SubpageButton from "./SubpageButton";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center gap-4 py-4 bg-white/20 backdrop-blur-md fixed top-0 z-50">
      <SubpageButton to="/" label="Home" />
      <SubpageButton to="/english" label="My Love In English" />
      <SubpageButton to="/bangla" label="My Love In Bangla" />
      <SubpageButton to="/hindi" label="My Love In Hindi" />
      <SubpageButton to="/myheart" label="My Heart" />
      <SubpageButton to="/question" label="Answer My Question" />
    </nav>
  );
    }
