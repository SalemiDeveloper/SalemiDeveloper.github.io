import { SectionTitle } from "./section-title.js";
import { ProjectCard } from "./project-card.js";
import { FeaturedProjectCard } from "./featured-project-card.js";

export function ProjectsSection(projects) {

    const featured = projects.find(
    project => project.featured
);
    const other = projects.filter(
        project => !project.featured
    );

    return `
        <section class="projects" id="projects" data-reveal>
            <div class="container">

                ${SectionTitle({
                    eyebrow: "",
                    title: "Projeto em destaque"
                })}

                ${
                    featured
                        ? FeaturedProjectCard(featured)
                        : ""
                }

                <div class="projects__grid">
                    ${other
                        .map(project => ProjectCard(project))
                        .join("")}
                </div>

            </div>
        </section>
    `;
}