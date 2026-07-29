import { Badge } from "./badge.js";
import { Button } from "./button.js";

export function ProjectCard(project) {
    return `
        <article class="project-card project-card--compact">
            <header class="project-card__header">
                <h3 class="project-card__title">
                    ${project.title}
                </h3>
            </header>

            <p class="project-card__description">
                ${project.description}
            </p>

            <div class="project-card__stack">
                ${project.stack.map(stack => Badge(stack)).join(" | ")}
            </div>

            <footer class="project-card__actions">
                ${Button({
                    text: "Github",
                    href: project.github,
                    variant: "secondary",
                    target: "_blank"
                })}
            </footer>
        </article>
    `;
}