import { getPokemons, guardarFavorito, eliminarFavorito, esFavorito } from "./conexion.js";

export async function mostrarHome() {
  const contenedor = document.getElementById("contenido");
  contenedor.innerHTML = "<h2>Lista de Pokémon</h2>";

  const lista = document.createElement("div");
  lista.classList.add("lista-pokemon");

  const pokemons = await getPokemons();

  pokemons.forEach(pokemon => {
    const card = document.createElement("div");
    card.classList.add("pokemon-card");

    const nombre = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    const botonFav = document.createElement("button");
    botonFav.textContent = esFavorito(pokemon.name) ? "❤️" : "🤍";
    botonFav.classList.add("boton-fav");

    botonFav.addEventListener("click", () => {
      if (esFavorito(pokemon.name)) {
        eliminarFavorito(pokemon.name);
        botonFav.textContent = "🤍";
      } else {
        guardarFavorito(pokemon);
        botonFav.textContent = "❤️";
      }
    });

    card.innerHTML = `
      <p>${nombre}</p>
      <a href="#/pokemon/${pokemon.name}">Ver detalle</a>
    `;
    card.appendChild(botonFav);
    lista.appendChild(card);
  });

  contenedor.appendChild(lista);
}
