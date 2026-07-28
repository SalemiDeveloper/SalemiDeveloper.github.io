import { Badge } from "./badge.js";
import { Button } from "./button.js";

export function FeaturedProjectCard(featured) {
    return `        
        <article class="project-card">
            <header class="project-card__header">
                <h3 class="project-card__title">${featured.title}</h3>
            </header>

            <p class="project-card__description">
                    ${featured.description}
            </p>

            <div class="project-card__stack">
                ${featured.stack.map(stack => Badge(stack)).join(" | ")}
            </div>

            <div class="project-card__content">
                ${
                    featured.image
                        ? `
                            <div class="project-card__image">
                                <img
                                    src="${featured.image}"
                                    alt="${featured.title}"
                                >
                            </div>
                        `
                        : ""
                }
                <ul class="project-card__highlights">
                    ${featured.highlights
                        .map(highlight => `<li>${highlight}</li>`)
                        .join("")
                    }
                </ul>                
            </div>

            <div class="project-card__actions">
                ${Button({
                    text:"Github",
                    href:featured.github,
                    variant:"secondary",
                    target:"_blank"
                })}
            </div>
        </article>
    `;
}