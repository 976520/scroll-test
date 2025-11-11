import { PokemonList } from "./PokemonList";
import { fetchPokemonPage } from "./fetchPokemonPage";
import type { Pokemon } from "../types/type";

async function getInitialPokemons() {
  const data = await fetchPokemonPage(0, 20);
  return { items: data.items, total: data.total };
}

export default async function PokemonPage() {
  const { items, total } = await getInitialPokemons();
  return <PokemonList initialData={items} initialTotal={total} />;
}
