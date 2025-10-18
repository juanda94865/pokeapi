export function mostrarInformativa() {
  const contenedor = document.getElementById("contenido");
  contenedor.innerHTML = `
    <h2>Sobre la App</h2>
    <p>Proyecto de PokéAPI desarrollado con JavaScript, HTML y CSS.</p>
    <p>Datos obtenidos de <a href="https://pokeapi.co" target="_blank">PokeAPI.co</a>.</p>
  `;
}
