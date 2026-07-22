// Responsabilidade do arquivo: Inicialização da aplicação.

import { Navbar } from "./components/navbar.js";
import { Hero } from "./components/hero.js";
import { Layout } from "./components/layout.js";

//const app = document.querySelector("#app");

function render() {
    app.innerHTML = Layout(`${Hero()}`);
}


render();
initializeNavbar();

function initializeNavbar() {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    window.addEventListener("scroll", () => {

        navbar.classList.toggle(
            "navbar--scrolled",
            window.scrollY > 20
        );

    });

}