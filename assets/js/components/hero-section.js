
import { Button } from "./button.js";
import { InfoItem } from "./info-item.js";

export function HeroSection(profile, texts) {
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
                                text: texts.projectsButton,
                                href: "#projects",
                                variant: "primary"
                            })}

                            ${Button({
                                text: "GitHub",
                                href: profile.github,
                                variant: "secondary",
                                target: "_blank"
                            })}
                        </div>
                    </div>

                    <div class="hero__right">
                        <div class="hero-panel">
                            ${InfoItem({
                                label: texts.statusLabel,
                                value: profile.status.availability,
                                icon: `
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <circle cx="12" cy="12" r="8"/>
                                        <path d="M9 12l2 2 4-4"/>
                                    </svg>
                                `
                            })}

                            ${InfoItem({
                                label: texts.currentProjectLabel,
                                value: profile.status.project,
                                icon: `
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M3 3v18h18"/>
                                        <path d="m6 15 4-4 3 2 6-7"/>
                                        <path d="M14 6h5v5"/>
                                    </svg>
                                `
                            })}

                            ${InfoItem({
                                label: texts.learningLabel,
                                value: profile.status.next,
                                icon: `
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M2 7l10-5 10 5-10 5-10-5z"/>
                                        <path d="M6 10v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"/>
                                    </svg>
                                `
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}
