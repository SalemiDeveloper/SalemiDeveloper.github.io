import { profile } from "../data/profile.js";
import { Button } from "./button.js";

export function Navbar() {
    return `
        <header class="navbar">
            <div class="container">
                <div class="navbar__content">
                    ${navbarBrand()}
                    ${navbarNavigation()}
                    ${navbarActions()}
                </div>
            </div>
        </header>
    `;
}

function navbarBrand() {
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

function navbarNavigation() {
    return `
        <nav class="navbar__nav">
            <a href="#projects">Projetos</a>
            <a href="#lab">Lab</a>
            <a href="#about">Sobre</a>
        </nav>
    `;
}

function navbarActions() {
    return `
        <div class="navbar__actions">
            ${Button({
                text:"Github",
                href:profile.github,
                variant:"secondary",
                target:"_blank"
            })}
        </div>
    `;
}