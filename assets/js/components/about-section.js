
import { SectionTitle } from "./section-title.js";
import { InfoCard } from "./info-card.js";

export function AboutSection(about, texts) {
    return `
        <section class="about section" id="about" data-reveal>
            <div class="container">
                ${SectionTitle({
                    eyebrow: "",
                    title: about.title
                })}

                <div class="about__intro">
                    <div class="about__photo">
                        <img
                            src="assets/images/profile.png"
                            alt="${texts.photoAlt}"
                        >
                    </div>

                    <p class="about__description">
                        ${about.description}
                    </p>
                </div>

                <div class="about__grid">
                    ${about.cards.map(card => InfoCard(card)).join("")}
                </div>
            </div>
        </section>
    `;
}
