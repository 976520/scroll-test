import type { Pokemon } from "../types/type";

export const PokemonItem = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
      <img
        src={pokemon.sprites.front_default || ""}
        alt={pokemon.name}
        style={{ width: "64px", height: "64px" }}
      />
      <div>
        <div style={{ fontWeight: "600", textTransform: "capitalize" }}>
          {pokemon.name} #{pokemon.id}
        </div>
        <div style={{ fontSize: "12px", color: "#666" }}>
          {pokemon.types.map((t) => t.type.name).join(", ")}
        </div>
      </div>
    </div>
  );
};
