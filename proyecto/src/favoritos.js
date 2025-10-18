import { getFavoritos, eliminarFavorito } from "./conexion.js";

export function mostrarFavoritos() {
  const contenedor = document.getElementById("contenido");
  contenedor.innerHTML = "<h2>Pokémon Favoritos ❤️</h2>";

  const favoritos = getFavoritos();

  if (favoritos.length === 0) {
    contenedor.innerHTML += "<p>No tienes favoritos aún.</p>";
    return;
  }

  const lista = document.createElement("div");
  lista.classList.add("lista-pokemon");

  favoritos.forEach(pokemon => {
    const card = document.createElement("div");
    card.classList.add("pokemon-card");

    const nombre = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "🗑️";
    botonEliminar.classList.add("boton-eliminar");
    botonEliminar.addEventListener("click", () => {
      eliminarFavorito(pokemon.name);
      mostrarFavoritos(); // refrescar vista
    });

    card.innerHTML = `
      <p>${nombre}</p>
      <a href="#/pokemon/${pokemon.name}">Ver detalle</a>
    `;
    card.appendChild(botonEliminar);
    lista.appendChild(card);
  });

  contenedor.appendChild(lista);
}
