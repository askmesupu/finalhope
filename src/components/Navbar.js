import React from "react";
import SubpageButton from "./SubpageButton";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex flex-wrap justify-center gap-2 md:gap-4 p-3 bg-white/20 backdrop-blur-md shadow-md z-50">
      <SubpageButton to="/" label="Home" />
      <SubpageButton to="/myloveenglish" label="My Love English" />
      <SubpageButton to="/mylovebangla" label="My Love Bangla" />
      <SubpageButton to="/mylovehindi" label="My Love Hindi" />
      <SubpageButton to="/myheart" label="My Heart" />
      <SubpageButton to="/answermyquestion" label="Answer My Question" />
    </nav>
  );
}
