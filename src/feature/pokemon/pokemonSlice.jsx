// import { createEntityAdapter } from "@reduxjs/toolkit";
// import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

// const pokemonAdapter = createEntityAdapter();

// const initialState = pokemonAdapter.getInitialState();

export const pokemonApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllPokemons: builder.query({
      query: () => "pokemon/?offset=0&limit=1154",
      transformResponse: (responseData) => responseData.results,
    }),
    getPokemonByName: builder.query({
      query: (pokemonName) => `pokemon/${pokemonName}`,
    }),
  }),
});

export const { useGetAllPokemonsQuery, useGetPokemonByNameQuery } =
  pokemonApiSlice;
