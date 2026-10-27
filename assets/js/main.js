
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
import { initializeTheme, initializeThemeToggle } from "./services/theme.js";
import { initializeSkills } from "./services/skills.js";
import { initializeProjectsCarousel } from "./services/projects-carousel.js";
import { getLanguage, initializeLanguageToggle } from "./services/language.js";

// Idioma atual do portfólio: "pt" ou "en".
const LANGUAGE = getLanguage();

async function render() {
    const app = document.querySelector("#app");

    const [
        profileModule,
        aboutModule,
        skillsModule,
        contactModule,
        footerModule,
        interfaceModule,
        projects
    ] = await Promise.all([
        import(`../data/${LANGUAGE}/profile.js`),
        import(`../data/${LANGUAGE}/about.js`),
        import(`../data/${LANGUAGE}/skills.js`),
        import(`../data/${LANGUAGE}/contact.js`),
        import(`../data/${LANGUAGE}/footer.js`),
        import(`../data/${LANGUAGE}/interface.js`),
        getProjects(LANGUAGE)
    ]);

    const { profile } = profileModule;
    const { about } = aboutModule;
    const { skills } = skillsModule;
    const { contact } = contactModule;
    const { footer } = footerModule;
    const { interfaceTexts } = interfaceModule;

    app.innerHTML = Layout(`
        ${Navbar(profile, interfaceTexts, LANGUAGE)}
        ${HeroSection(profile, interfaceTexts)}
        ${ProjectsSection(projects, interfaceTexts)}
        ${AboutSection(about, interfaceTexts)}
        ${SkillsSection(skills)}
        ${ContactSection(contact, interfaceTexts)}
        ${FooterSection(footer)}
    `);
}

async function main() {
    initializeTheme();

    try {
        await render();
    } catch (error) {
        console.error("Erro ao carregar o portfólio:", error);

        const app = document.querySelector("#app");

        if (app) {
            app.innerHTML = `
                <p>Não foi possível carregar a aplicação. Tente novamente.</p>
            `;
        }

        return;
    }

    initialize();
    initializeThemeToggle();
    initializeLanguageToggle();
    initializeScrollRevel();
    initializeSkills();
    initializeProjectsCarousel();
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
