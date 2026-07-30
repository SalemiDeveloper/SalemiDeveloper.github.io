import { skills } from "../../data/skills.js";
import { SectionTitle } from "./section-title.js";
import { InfoCard } from "./info-card.js";

export function SkillsSection() {
    return `
        <section class="skills section" id="skills" data-reveal>
            <div class="container">
                ${SectionTitle({
                    eyebrow: "",
                    title: skills.title
                })}

                <p class="skills_description">
                    ${skills.description}
                </p>

                <div class="skills__grid">
                    ${skills.categories.map(category => InfoCard(category)).join("")}
                </div>
            </div>
        </section>
    `;
}