import { Badge } from "./badge.js";
import { Button } from "./button.js";

export function ProjectCard(project) {
    return `        
        <article class="project-card">
            ${
                project.image
                ? `
                    <div class="project-card__image">
                        <img src="${project.image}">
                        alt="${project.title}"
                    </div>    
                ` 
                : ""
            }
            <header class="project-card__header">
                <h3 class="project-card__title">${project.title}</h3>
                ${project.featured ? 
                    `<span class="project-card__featured">Destaque</span>` 
                    : ""
                }
            </header>

            <p class="project-card__description">
                    ${project.description}
            </p>

            <div class="project-card__stack">
                ${project.stack.map(stack => Badge(stack)).join("")}
            </div>

            <ul class="project-card__highlights">
                ${project.highlights
                    .map(highlight => `<li>${highlight}</li>`)
                    .join("")
                }
            </ul>

            <div class="project-card__actions">
                ${Button({
                    text:"Github",
                    href:project.github,
                    variant:"secondary",
                    target:"_blank"
                })}
            </div>
        </article>
    `;
}