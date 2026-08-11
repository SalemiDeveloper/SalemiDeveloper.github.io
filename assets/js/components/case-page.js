import { CaseHeader } from "./case-header.js";
import { OverviewSection } from "./overview-section.js";
import { RoleSection } from "./role-section.js";
import { ContributionSection } from "./contributions-section.js";
import { TechnologySection } from "./technology-section.js";
import { ArchitectureSection } from "./architecture-section.js";
import { ChallengesSection } from "./challenge-section.js";
import { GallerySection } from "./gallery-section.js";
import { Button } from "./button.js";
import { ThemeToggle } from "./theme-toggle.js";

export function CasePage(project) {
    return `
        <section class="case">
            <div class="container">

                <div class="case__topbar">
                    ${Button({
                        text: "← Voltar para os projetos",
                        href: "index.html#projects",
                        variant: "secondary"
                    })}

                    ${ThemeToggle()}
                </div>

                ${CaseHeader(project)}
                ${OverviewSection(project)}
                ${RoleSection(project)}
                ${ContributionSection(project)}
                ${TechnologySection(project)}
                ${ArchitectureSection(project)}
                ${ChallengesSection(project)}
                ${GallerySection(project)}

            </div>
        </section>
    `;
}