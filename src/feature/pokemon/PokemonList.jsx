import React from "react";
import { Link } from "react-router-dom";
import { useGetAllPokemonsQuery } from "./pokemonSlice";

const PokemonList = () => {
  const {
    data: pokemons,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllPokemonsQuery();

  console.log(pokemons);

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = (
      <>
        {pokemons?.map((pokemon) => (
          <Link to={`/${pokemon?.name}`} key={pokemon.name}>
            <p>{pokemon.name}</p>
          </Link>
        ))}
      </>
    );
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return <div>{content}</div>;
};

export default PokemonList;
