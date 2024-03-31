import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PokeCard from "../components/pokeCard";

const About = () => {
  const { pokemonId } = useParams(); //Hook for using params passed in a URL... used for rerotuing from pokedex
  const [pokemonData, setPokemonData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [userInput, setUserInput] = useState(pokemonId || ""); // Initialize with URL param or empty string. If page not loaded with parameters then search will be optional

  useEffect(() => {
    //async function inside useeffect
    //cannot use await inside use effect however by declaring ANOTHER async function inside or outside it works...
    fetchPokemonInfo(pokemonId);
  }, [pokemonId]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchInput) {
      //  setUserInput(searchInput);
      await fetchPokemonInfo(searchInput);
    }
  };

  const fetchPokemonInfo = async (id) => {
    console.log(id);

    if (id) {
      setIsLoading(true); // Set loading state to true

      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        const data = await response.json();
        setPokemonData(data);
        setUserInput(id)
      } catch (error) {
        console.log("Error in About fetching function: ", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  if (isLoading) {
    return <p>Loading pokemon info....</p>;
  }

  if (!pokemonData && !userInput) {
    return (
      <div>
        <h2>Search for a Pokemon</h2>
        <p>Use Either Name or #ID</p>
        <form onSubmit={handleSearch} >
          <input
            type="text"
            required
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <p>{searchInput}</p>
          <button disabled={!searchInput}>
            Search
          </button>
        </form>
      </div>
    );
  }

  // Handle cases where pokemon is not found or invalid input is provided
  /*
  if (!pokemonData && userInput) {
    return <p>Pokemon not found. Please try a different name or ID.</p>;
  }
  */
  if (pokemonData){
  const name = pokemonData.name;
  const id = pokemonData.id;
  const height = pokemonData.height;
  const weight = pokemonData.weight;
  const abilities = pokemonData.abilities;
  const types = pokemonData.types;
  const stats = pokemonData.stats;
  const picture = pokemonData.sprites.front_default;



  return (
    <>
    <div
      className="about"
      style={{
        backgroundColor: determineColor(pokemonData?.types?.[0]?.type?.name),
      }}
    >
      {/* About Pokemon section with conditional rendering */}
      {pokemonData && (
        <h2>
          About Pokemon #{id} - {name}
        </h2>
      )}

      <img src={picture} alt={name} />

      {/* Height and Weight section with conditional rendering */}
      {pokemonData && (
        <>
          <p>Height: {height / 10} m </p>
          <p>Weight: {weight / 10} kg </p>
        </>
      )}

      <h3>Abilities:</h3>
      <ul>
        {abilities.map((ability) => (
          <li key={ability.ability.name}>{ability.ability.name}</li>
        ))}
      </ul>

      <h3>Types:</h3>
      <ul>
        {types.map((type) => (
          <li key={type.type.name}>{type.type.name}</li>
        ))}
      </ul>

      <table>
        <thead>
          <tr>
            <th>Stat</th>
            <th>Base Value</th>
          </tr>
        </thead>
        <tbody>
          {stats.map((stat) => (
            <tr key={stat.stat.name}>
              <td>{stat.stat.name}</td>
              <td>{stat.base_stat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
     <div>
     <h2>Search for a Pokemon</h2>
     <p>Use Either Name or #ID</p>
     <form onSubmit={handleSearch} >
       <input
         type="text"
         required
         value={searchInput}
         onChange={(e) => {
           setSearchInput(e.target.value);
         }}
       />
       <p>{searchInput}</p>
       <button disabled={!searchInput}>
         Search
       </button>
     </form>
   </div>
   </>
  );
}
};

function determineColor(type) {
  switch (type) {
    case "normal":
      return "#D9D9A4"; // Matte and brighter yellow
    case "fire":
      return "#F5A87D"; // Matte and brighter orange
    case "water":
      return "#9AC6FF"; // Matte and brighter blue
    case "electric":
      return "#FFEB79"; // Matte and brighter yellow
    case "grass":
      return "#B5E6B5"; // Matte and brighter green
    case "ice":
      return "#A7D8DE"; // Matte and brighter cyan
    case "fighting":
      return "#D88A6C"; // Matte and brighter brown
    case "poison":
      return "#BC9BBC"; // Matte and brighter purple
    case "ground":
      return "#EBD689"; // Matte and brighter yellow
    case "flying":
      return "#B3A1FF"; // Matte and brighter violet
    case "psychic":
      return "#FFA9BB"; // Matte and brighter pink
    case "bug":
      return "#C4E755"; // Matte and brighter green
    case "rock":
      return "#C9BB8A"; // Matte and brighter brown
    case "ghost":
      return "#A895C7"; // Matte and brighter purple
    case "dragon":
      return "#9D8BFF"; // Matte and brighter indigo
    case "dark":
      return "#A89F97"; // Matte and brighter grayish-brown
    case "steel":
      return "#C6C6DB"; // Matte and brighter gray
    case "fairy":
      return "#FFD5E1"; // Matte and brighter pink
    default:
      return "#C0C0C0"; // Default matte and brighter gray
  }
}

export default About;
