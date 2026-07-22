// Responsabilidade do arquivo: Inicialização da aplicação.

import { Navbar } from "./components/navbar.js";
import { Hero } from "./components/hero.js";
import { Layout } from "./components/layout.js";

//const app = document.querySelector("#app");

function render() {
    app.innerHTML = Layout(`${Hero()}`);
}


render();