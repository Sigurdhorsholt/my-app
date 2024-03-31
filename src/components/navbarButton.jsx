import React from "react";
import { Link } from "react-router-dom";

export default function NavbarButton({ to, text, lightDark }) {
  return (
    <div>
      {/* Replace anchor tag with Link component */}
      <Link
        to={to}
        className="navbarButton"
        style={{
          color: "white",
          backgroundColor: lightDark === "dark" ? "#f1356d" : "#35F1B9",
        }}
      >
        {text}
      </Link>
    </div>
  );
}
