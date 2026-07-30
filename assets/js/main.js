// Responsabilidade do arquivo: Inicialização da aplicação.

import { Layout } from "./components/layout.js";
import { Navbar } from "./components/navbar.js";
import { HeroSection } from "./components/hero-section.js";
import { ProjectsSection } from "./components/projects-section.js";
import { getProjects } from "./services/projects.js";
import { AboutSection } from "./components/about-section.js";
import { SkillsSection } from "./components/skills-section.js";
import { ContactSection } from "./components/contact-section.js";
import { FooterSection } from "./components/footer.js";
import { initializeScrollRevel } from "./utils/scroll-reveal.js";

async function render() {
    const app = document.querySelector("#app");
    const projects = await getProjects();

    app.innerHTML = Layout(`
        ${Navbar()}
        ${HeroSection()}
        ${ProjectsSection(projects)}
        ${AboutSection()}
        ${SkillsSection()}
        ${ContactSection()}
        ${FooterSection()}
    `);
}

async function main() {
    await render();
    initialize();
    initializeScrollRevel();
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
