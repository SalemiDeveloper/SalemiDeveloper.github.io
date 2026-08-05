import { OverviewItem } from "./overview-item.js";

export function OverviewSection(project) {

    return `
        <section class="overview">
            ${OverviewItem({
                title: "O Problema",
                content: project.overview.problem
            })}

            ${OverviewItem({
                title: "A Solução",
                content: project.overview.solution
            })}

            ${OverviewItem({
                title: "Público-alvo",
                content: project.overview.audience
            })}
        </section>
    `;
}