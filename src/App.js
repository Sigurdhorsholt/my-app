import "./App.css";
import Navbar from "./components/navbar";
import Pokedex from "./components/pokedex";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Navbar></Navbar>

        <div className="pokedexContainer">
          <Pokedex/>
        </div>


      </div>
    </div>
  );
}

export default App;
