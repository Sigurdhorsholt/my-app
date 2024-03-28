import React from 'react'

export default function PokeCard({pokemon}) {

    function determineColor(type) {
        switch (type) {
            case "normal":
                return '#D9D9A4'; // Matte and brighter yellow
            case "fire":
                return '#F5A87D'; // Matte and brighter orange
            case "water":
                return '#9AC6FF'; // Matte and brighter blue
            case "electric":
                return '#FFEB79'; // Matte and brighter yellow
            case "grass":
                return '#B5E6B5'; // Matte and brighter green
            case "ice":
                return '#A7D8DE'; // Matte and brighter cyan
            case "fighting":
                return '#D88A6C'; // Matte and brighter brown
            case "poison":
                return '#BC9BBC'; // Matte and brighter purple
            case "ground":
                return '#EBD689'; // Matte and brighter yellow
            case "flying":
                return '#B3A1FF'; // Matte and brighter violet
            case "psychic":
                return '#FFA9BB'; // Matte and brighter pink
            case "bug":
                return '#C4E755'; // Matte and brighter green
            case "rock":
                return '#C9BB8A'; // Matte and brighter brown
            case "ghost":
                return '#A895C7'; // Matte and brighter purple
            case "dragon":
                return '#9D8BFF'; // Matte and brighter indigo
            case "dark":
                return '#A89F97'; // Matte and brighter grayish-brown
            case "steel":
                return '#C6C6DB'; // Matte and brighter gray
            case "fairy":
                return '#FFD5E1'; // Matte and brighter pink
            default:
                return '#C0C0C0'; // Default matte and brighter gray
        }
    }
    



  return (
<div className="pokemonCard" style={{
            color: "white",
            backgroundColor: determineColor(pokemon.types[0].type.name),
        }}>
    <p>{pokemon.name} #{pokemon.id}</p>
    {pokemon.sprites && pokemon.sprites.front_default && (
        <img src={pokemon.sprites.front_default} alt="" />
      )}
</div>
  )
}
