import { ArchitectureCard } from "./architecture-card.js";
import { ArchitectureDiagram } from "./architecture-diagram.js";

export function ArchitectureSection(project) {
    return `
        <section class="architecture">
            <h2 class="architecture-title">
                Arquitetura
            </h2>

            <p class="architecture__description">
                ${project.architecture.description}
            </p>

            ${ArchitectureDiagram()}

            <div class="architecture__grid">
                ${project.architecture.layers.map(ArchitectureCard).join("")}
            </div>
        </section>
    `;
}