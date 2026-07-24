// Responsabilidade do arquivo: Inicialização da aplicação.

import { Layout } from "./components/layout.js";
import { Navbar } from "./components/navbar.js";
import { Hero } from "./components/hero.js";
import { ProjectsSection } from "./components/projects-section.js";
import { getProjects } from "./services/projects.js";

async function render() {
    const app = document.querySelector("#app");
    const projects = await getProjects();

    app.innerHTML = Layout(`
        ${Navbar()}
        ${Hero()}
        ${ProjectsSection(projects)}
    `);
}

async function main() {
    await render();
    initialize();
}

main();

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
