import { about } from "../../data/about.js";
import { SectionTitle } from "./section-title.js";
import { InfoCard } from "./info-card.js";

export function AboutSection() {
    return `
        <section class="about section" id="about">
            <div class="container">
                ${SectionTitle({
                    eyebrow: "Conheça um pouco mais",
                    title: about.title 
                })}

                <p class="about__description">
                    ${about.description}
                </p>

                <div class="about__grid">
                    ${about.cards.map(card => InfoCard(card)).join("")}
                </div>
            </div>
        </section>
    `;
}