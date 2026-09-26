import { SectionTitle } from "./section-title.js";
import { ProjectCard } from "./project-card.js";
import { FeaturedProjectCard } from "./featured-project-card.js";
import { ProjectsCarousel } from "./projects-carousel.js";

export function ProjectsSection(projects) {

    const featured = projects.find(
        project => project.featured
    );

    const other = projects.filter(
        project => !project.featured
    );

    const visibleProjects = other.slice(0, 2);
    const carouselProjects = other.slice(2);

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
                    ${visibleProjects
                        .map(project => ProjectCard(project))
                        .join("")}
                </div>

                ${
                    carouselProjects.length
                        ? `
                            <div class="projects__more">
                                <button
                                    class="projects__more-button"
                                    type="button"
                                    data-projects-toggle
                                >
                                    Ver mais projetos
                                    <span>↓</span>
                                </button>
                            </div>

                            <div
                                class="projects__carousel-wrapper"
                                data-projects-carousel
                            >
                                ${ProjectsCarousel(carouselProjects)}
                            </div>
                        `
                        : ""
                }

            </div>
        </section>
    `;
}