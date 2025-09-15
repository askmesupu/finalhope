import React from "react";

export default function SubpageButton({ label, onClick }) {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
}
