
import { OverviewItem } from "./overview-item.js";

export function OverviewSection(project, texts) {
    return `
        <section class="overview">
            ${OverviewItem({
                title: texts.problem,
                content: project.overview.problem
            })}

            ${OverviewItem({
                title: texts.solution,
                content: project.overview.solution
            })}

            ${OverviewItem({
                title: texts.targetAudience,
                content: project.overview.audience
            })}
        </section>
    `;
}
