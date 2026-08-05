import { Badge } from "./badge.js";
import { Button } from "./button.js";

export function CaseHeader(project) {
    return `
        <header class="case-header">
            <span class="case-header__eyebrow">
                Estudo de Caso
            </span>

            <h1 class="case-header__title">
                ${project.title}
            </h1>

            <p class="case-header__description">
                ${project.description}
            </p>

            <div class="case-header__stack">
                ${project.technologies.map(Badge).join(" | ")}
            </div>

            <div class="case-header__actions">
                ${Button({
                    text:"Github",
                    href:project.github,
                    target:"_blank"
                })}

                ${
                    project.video ?
                    Button({
                        text: "Ver vídeo",
                        href:project.video,
                        variant:"secondary",
                        target:"_blank"
                    }) : ""
                }
            </div>
        </header>
    `;
}