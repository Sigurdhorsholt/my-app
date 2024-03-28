import React from "react";

export default function NavbarButton({ text, lightDark }) {
  return (
    <div>
      <a
        href="/"
        className="navbarButton"
        style={{
          color: "white",
          backgroundColor: lightDark === "dark" ? "#f1356d" : "#35F1B9",
        }}
      >
        {text}
      </a>
    </div>
  );
}
