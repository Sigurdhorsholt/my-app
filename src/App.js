import "./App.css";
import Navbar from "./components/navbar";
import Pokedex from "./routes/pokedex";
import About from "./routes/About";
import Home from "./routes/Home";

import { Outlet, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;