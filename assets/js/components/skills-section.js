import { skills } from "../../data/skills.js";
import { SectionTitle } from "./section-title.js";

export function SkillsSection() {
    const technologies = skills.categories.flatMap(
        category => category.items
    );

    const firstRow = technologies.slice(0, 6);
    const secondRow = technologies.slice(6);

    return `
        <section class="skills section" id="skills" data-reveal>
            <div class="container">

                ${SectionTitle({
                    eyebrow: "",
                    title: skills.title
                })}

                <p class="skills__description">
                    ${skills.description}
                </p>

                <div class="skills__marquee">

                    <div class="skills__track skills__track--left">
                        ${renderTechnologies(firstRow)}
                        ${renderTechnologies(firstRow)}
                    </div>

                    <div class="skills__track skills__track--right">
                        ${renderTechnologies(secondRow)}
                        ${renderTechnologies(secondRow)}
                    </div>

                </div>

            </div>
        </section>
    `;
}

function renderTechnologies(technologies) {
    return technologies
        .map(technology => `
            <span class="skills__item">
                ${technology}
            </span>
        `)
        .join("");
}