import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetPokemonByNameQuery } from "./pokemonSlice";

const SinglePokemon = () => {
  const { pokemonName } = useParams();
  const { data: pokemon } = useGetPokemonByNameQuery(pokemonName);

  return (
    <div>
      <Link to="/">Back</Link>
      <p>{pokemon?.name}</p>
    </div>
  );
};

export default SinglePokemon;
