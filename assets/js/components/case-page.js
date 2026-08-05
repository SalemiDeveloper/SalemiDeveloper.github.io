import { CaseHeader } from "./case-header.js";
import { OverviewSection } from "./overview-section.js";

export function CasePage(project) {
    return `
        <div class="case">
            <div class="container">
                ${CaseHeader(project)}
                ${OverviewSection(project)}
            </div>
        </div>
    `;
}