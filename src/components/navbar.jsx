import React from "react";
import NavbarButton from "./navbarButton";

export default function navbar() {
  return (
    <div className="navbar">
      <h1>Pokedex site</h1>
      <div className="navUL">
        <NavbarButton text={"Home"} lightDark={"light"} />
        <NavbarButton text={"About"} lightDark={"light"} />
        <NavbarButton text={"PokeDex"} lightDark={"dark"} />
      </div>
    </div>
  );
}
