import { SectionTitle } from "./section-title.js";
import { ProjectCard } from "./project-card.js";

export function ProjectsSection(projects) {

    const featuredProjects = projects.filter(
        project => project.featured
    );

    return `
        <section class="projects" id="projects">
            <div class="container">

                ${SectionTitle({
                    eyebrow: "Projetos",
                    title: "Projeto em destaque"
                })}

                <div class="projects__grid">
                    ${featuredProjects
                        .map(project => ProjectCard(project))
                        .join("")}
                </div>

            </div>
        </section>
    `;
}