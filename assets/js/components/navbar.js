
import { Button } from "./button.js";
import { ThemeToggle } from "./theme-toggle.js";
import { LanguageToggle } from "./language-toggle.js";

export function Navbar(profile, texts, language) {
    return `
        <header class="navbar">
            <div class="container">
                <div class="navbar__content">
                    ${navbarBrand(profile)}
                    ${navbarNavigation(texts)}
                    ${navbarActions(profile, texts, language)}
                </div>
            </div>
        </header>
    `;
}

function navbarBrand(profile) {
    return `
        <a href="#" class="navbar__brand">
            <div class="navbar__logo">
                ${profile.logo}
            </div>

            <span class="navbar__name">
                ${profile.name}
            </span>
        </a>
    `;
}

function navbarNavigation(texts) {
    return `
        <nav class="navbar__nav">
            <a href="#projects">${texts.projects}</a>
            <a href="#about">${texts.about}</a>
        </nav>
    `;
}

function navbarActions(profile, texts, language) {
    return `
        <div class="navbar__actions">
            ${ThemeToggle()}
            ${LanguageToggle(language)}

            ${Button({
                text: texts.github,
                href: profile.github,
                variant: "secondary",
                target: "_blank"
            })}
        </div>
    `;
}
