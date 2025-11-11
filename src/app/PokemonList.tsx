"use client";

import { InfiniteList } from "scrolloop";
import { fetchPokemonPage } from "./fetchPokemonPage";
import type { Pokemon } from "../types/type";
import { PokemonItem } from "../components/PokemonItem";

interface PokemonListProps {
  initialData: Pokemon[];
  initialTotal: number;
}

export function PokemonList({
  initialData,
  initialTotal,
}: PokemonListProps) {
  return (
    <InfiniteList<Pokemon>
      isSSR={true}
      initialData={initialData}
      initialTotal={initialTotal}
      fetchPage={fetchPokemonPage}
      pageSize={20}
      itemSize={100}
      height={1000}
      renderItem={(pokemon, _, style) => (
        <div
          style={{ ...style, padding: "12px", borderBottom: "1px solid #eee" }}
        >
          {pokemon ? <PokemonItem pokemon={pokemon} /> : <div>로딩 중...</div>}
        </div>
      )}
      overscan={1}
    />
  );
}

