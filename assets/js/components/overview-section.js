import { CaseSection } from "./case-section.js";

export function OverviewSection(project) {
    return `
        ${CaseSection({
            title:"O Problema",
            content:project.overview.problem
        })}

        ${CaseSection({
            title:"A Solução",
            content:project.overview.problem
        })}

        ${CaseSection({
            title:"Público-alvo",
            content:project.overview.problem
        })}
    `;
}