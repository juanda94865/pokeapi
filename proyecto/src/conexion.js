const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=1025";

export async function getPokemons() {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.results;
}

// FAVORITOS (localStorage)
export function getFavoritos() {
  return JSON.parse(localStorage.getItem("favoritos")) || [];
}

export function guardarFavorito(pokemon) {
  const favoritos = getFavoritos();
  if (!favoritos.some(p => p.name === pokemon.name)) {
    favoritos.push(pokemon);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }
}

export function eliminarFavorito(nombre) {
  const favoritos = getFavoritos().filter(p => p.name !== nombre);
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

export function esFavorito(nombre) {
  return getFavoritos().some(p => p.name === nombre);
}
