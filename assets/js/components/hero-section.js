import { profile } from "../../data/profile.js";
import { Button } from "./button.js";
import { InfoItem } from "./info-item.js";

export function HeroSection() {
    return `
        <section class="hero" data-reveal>
            <div class="container">
                <div class="hero__content">
                    <div class="hero__left">
                        <span class="hero__eyebrow">${profile.role}</span>
                        <h1 class="hero__title">${profile.headline}</h1>
                        <p class="hero__description">
                            ${profile.description}
                        </p>
                        <div class="hero__actions">
                            ${Button({
                                text:"Ver Projetos",
                                href:"#projects",
                                variant:"primary"
                            })}

                            ${Button({
                                text:"Github",
                                href:profile.github,
                                variant:"secondary",
                                target:"_blank"
                            })}
                        </div>
                    </div>

                    <div class="hero__right">
                        <div class="hero-panel">
                            ${InfoItem({
                                label:"Status",
                                value:profile.status.availability,
                                 icon: `
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <circle cx="12" cy="12" r="8"/>
                                        <path d="M9 12l2 2 4-4"/>
                                    </svg>
                                `
                            })}

                            ${InfoItem({
                                label:"Projeto Atual",
                                value:profile.status.project,
                                icon: `
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M6 12h4"/>
                                        <path d="M8 10v4"/>
                                        <path d="M15 13h.01"/>
                                        <path d="M18 11h.01"/>
                                        <path d="M7.5 8h9a4.5 4.5 0 0 1 4.3 5.8l-.5 1.7a2 2 0 0 1-3.3.9L15.5 15h-7l-1.5 1.4a2 2 0 0 1-3.3-.9l-.5-1.7A4.5 4.5 0 0 1 7.5 8z"/>
                                    </svg>
                                `
                            })}

                            ${InfoItem({
                                label:"Aprendendo",
                                value:profile.status.next,
                                icon: `
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M2 7l10-5 10 5-10 5-10-5z"/>
                                        <path d="M6 10v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"/>
                                    </svg>
                                `
                            })}
                        <div>
                    </div>
                </div>
            </div>
        </section>
    `;
}