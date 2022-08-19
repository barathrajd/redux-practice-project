import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import PokemonList from "./feature/pokemon/PokemonList";
import SinglePokemon from "./feature/pokemon/SinglePokemon";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PokemonList />} />
        <Route path=":pokemonName" element={<SinglePokemon />} />
      </Route>
    </Routes>
  );
};

export default App;
