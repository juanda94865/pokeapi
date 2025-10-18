import { guardarFavorito, eliminarFavorito, esFavorito } from "./conexion.js";

export async function mostrarDetalle(nombre) {
  const contenedor = document.getElementById("contenido");
  contenedor.innerHTML = "<h2>Cargando...</h2>";

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
    const data = await response.json();

    contenedor.innerHTML = `
      <h2>${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h2>
      <img src="${data.sprites.front_default}" alt="${data.name}">
      <p>Peso: ${data.weight}</p>
      <p>Altura: ${data.height}</p>
      <p>Tipo: ${data.types.map(t => t.type.name).join(", ")}</p>
    `;

    const botonFav = document.createElement("button");
    botonFav.textContent = esFavorito(data.name) ? "❤️ Quitar de Favoritos" : "🤍 Agregar a Favoritos";
    botonFav.classList.add("boton-fav");

    botonFav.addEventListener("click", () => {
      if (esFavorito(data.name)) {
        eliminarFavorito(data.name);
        botonFav.textContent = "🤍 Agregar a Favoritos";
      } else {
        guardarFavorito({ name: data.name, url: `https://pokeapi.co/api/v2/pokemon/${data.name}` });
        botonFav.textContent = "❤️ Quitar de Favoritos";
      }
    });

    contenedor.appendChild(botonFav);
  } catch (error) {
    contenedor.innerHTML = "<p>Error al cargar los datos del Pokémon.</p>";
  }
}
