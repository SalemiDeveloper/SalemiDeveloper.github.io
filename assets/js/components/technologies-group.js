import { Badge } from "./badge.js";

export function TechnologyGroup({ title, technologies }) {
    return `
        <article class="technology-group">
            <h3 class=""technology-group__title>
                ${title}
            </h3>

            <div class="technology-group__badges">
                ${technologies.map(Badge).join("")}
            </div>
        </article>
    `;
}