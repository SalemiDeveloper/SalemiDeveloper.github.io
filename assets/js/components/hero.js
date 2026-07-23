import { profile } from "../data/profile.js";
import { Button } from "./button.js";
import { InfoItem } from "./info-item.js";

export function Hero() {
    return `
        <section class="hero">
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
                                value:profile.status.availability
                            })}

                            ${InfoItem({
                                label:"Projeto Atual",
                                value:profile.status.project
                            })}

                            ${InfoItem({
                                label:"Aprendendo",
                                value:profile.status.next
                            })}
                        <div>
                    </div>
                </div>
            </div>
        </section>
    `;
}