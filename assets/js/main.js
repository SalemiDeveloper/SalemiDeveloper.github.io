// Responsabilidade do arquivo: Inicialização da aplicação.

import { Navbar } from "./components/navbar.js";
import { Hero } from "./components/hero.js";
import { Layout } from "./components/layout.js";

function render() {
    const app = document.querySelector("#app");

    app.innerHTML = Layout(`
        ${Navbar()}
        ${Hero()}
    `);
}

render();
initialize();

function initialize() {
    initializeNavbar();
}

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