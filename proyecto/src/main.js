import { mostrarHome } from "./home.js";
import { mostrarFavoritos } from "./favoritos.js";
import { mostrarCapturados } from "./capturados.js";
import { mostrarInformativa } from "./informativa.js";
import { mostrarDetalle } from "./pokemon.js";

function router() {
  const hash = window.location.hash || "#/";
  const [_, route, param] = hash.split("/");

  switch (route) {
    case "":
      mostrarHome();
      break;
    case "pokemon":
      if (param) mostrarDetalle(param);
      else mostrarHome();
      break;
    case "favoritos":
      mostrarFavoritos();
      break;
    case "capturados":
      mostrarCapturados();
      break;
    case "informativa":
      mostrarInformativa();
      break;
    default:
      mostrarHome();
  }
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
