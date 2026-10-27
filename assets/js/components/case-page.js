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

export function CasePage(project, texts) {
    return `
        <section class="case">
            <div class="container">

                <div class="case__topbar">
                    ${Button({
                        text: texts.backToProjects,
                        href: "index.html#projects",
                        variant: "secondary"
                    })}

                    ${ThemeToggle()}
                </div>

                ${CaseHeader(project, texts)}
                ${OverviewSection(project, texts)}
                ${RoleSection(project, texts)}
                ${ContributionSection(project, texts)}
                ${TechnologySection(project, texts)}
                ${ArchitectureSection(project, texts)}
                ${ChallengesSection(project, texts)}
                ${GallerySection(project, texts)}

            </div>
        </section>
    `;
}