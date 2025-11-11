import type { PageResponse } from "scrolloop";
import type { Pokemon } from "../types/type";

export async function fetchPokemonPage(
  page: number,
  size: number,
): Promise<PageResponse<Pokemon>> {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${page * size}&limit=${size}`,
  );
  const data = await res.json();
  const items = await Promise.all(
    data.results.map(async (item: { url: string }) => {
      const detail = await fetch(item.url).then((r) => r.json());
      return detail as Pokemon;
    }),
  );
  return { items, total: data.count, hasMore: data.next !== null };
}