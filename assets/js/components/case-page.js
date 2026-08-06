import { CaseHeader } from "./case-header.js";
import { OverviewSection } from "./overview-section.js";
import { RoleSection } from "./role-section.js";
import { ContributionSection } from "./contributions-section.js";
import { TechnologySection } from "./technology-section.js";
import { ArchitectureSection } from "./architecture-section.js";
import { ChallengesSection } from "./challenge-section.js";
import { Button } from "./button.js";

export function CasePage(project) {
    return `
        <section class="case">
            <div class="container">
           ${Button({
                text: "← Voltar para os projetos",
                href: "index.html#projects",
                variant: "ghost"
            })}
                ${CaseHeader(project)}
                ${OverviewSection(project)}
                ${RoleSection(project)}
                ${ContributionSection(project)}
                ${TechnologySection(project)}
                ${ArchitectureSection(project)}
                ${ChallengesSection(project)}
            </div>
        </section>
    `;
}