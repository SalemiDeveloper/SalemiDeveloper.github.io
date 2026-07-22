import { profile } from "../data/profile.js";
import { Button } from "./button.js";

export function Hero() {
    return `
        <section class="hero">
            <div class="container">
                <span class="hero__eyebrow">${profile.role}</span>
                <h1 class="hero__title">${profile.headline}</h1>
                <p class="hero__description">
                    ${profile.description}
                </p>
                <div class="hero__actions">
                    ${Button({
                        text:"Ver Projetos",
                        href:"#projects"
                    })}

                    ${Button({
                        text:"Github",
                        href:profile.github,
                        variant:"secondary",
                        target:"_blank"
                    })}
                </div>
            </div>
        </section>
    `;
}