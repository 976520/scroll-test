import { InfiniteList } from "scrolloop";
import { fetchPokemonPage } from "./fetchPokemonPage";
import "./App.css";
import type { Pokemon } from "./type";

const PokemonItem = ({ pokemon }: { pokemon: Pokemon }) => {
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

function App() {
  return (
    <InfiniteList<Pokemon>
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
      overscan={10}
    />
  );
}

export default App;