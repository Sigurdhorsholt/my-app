import React from "react";
import NavbarButton from "./navbarButton";

export default function navbar() {
  return (
    <div className="navbar">
      <h1>Pokedex site</h1>
      <div className="navUL">
        <NavbarButton to="/home" text={"Home"} lightDark={"light"} />
        <NavbarButton to="/about" text={"About"} lightDark={"light"} />
        <NavbarButton to="/pokedex" text={"PokeDex"} lightDark={"dark"} />
      </div>
    </div>
  );
}
