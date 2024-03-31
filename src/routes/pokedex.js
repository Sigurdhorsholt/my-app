import React, { useState, useEffect } from "react";
import PokeCard from "../components/pokeCard";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]); //state - remembers the pokemons currently fetched
  const [queryOffSet, setQueryOffSet] = useState(0); //state - used in query. when next btn pressed it is incremeted by 12 to get the next 12..

  const queryLimit = 12;

useEffect(() => {
  //Fetch list of 12 pokemons for 4x3 grid
  fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${queryLimit}&offset=${queryOffSet}`
  )
    .then((response) => response.json()) // response to JSON
    .then(async (data) => { 
      // async fetch for each pokemon in the response
      const promises = data.results.map(async (result) => { //mapping all full request to array called promises
        const pokemonResponse = await fetch(result.url); //fetch is made here for each..
        return pokemonResponse.json();
      });
      const pokemonData = await Promise.all(promises);
      setPokemons(pokemonData); //update state with array of all pokemon promises here
      //console.log("DATA", pokemonData)
    })
    .catch((error) => {
      console.log("Fetch problem in pokedex component..", error);
    });
}, [queryOffSet]); //queryoffset triggers refetch and rerender.. increment is handle in a click function..




  // Function to increment or decrement the offset for the API query. Cannot be smaller than 0 on backward...
  function handleNextClick(forwardBackward) {
    if (forwardBackward === "forward") {
      setQueryOffSet(queryOffSet + 12);
    }
    if (forwardBackward === "backward" && queryOffSet > 0) {
      setQueryOffSet(queryOffSet - 12);
    }
  }

  return (
    <div>
      
        <div className="gridContainer">
        {pokemons.map((pokemon) => (
          <div key={pokemon.id} className="pokeCard">
            <PokeCard pokemon={pokemon} />
          </div>
        ))}
        
      </div>
      <div className="forwardBackwardButtons">
        <button className="genericBtn"
          onClick={() => {
            handleNextClick("backward");
          }}
        >
          Backward
        </button>
        <button className="genericBtn"
          onClick={() => {
            handleNextClick("forward");
          }}
        >
          Forward
        </button>
      </div>
    </div>
  );
};




export default Pokedex;
