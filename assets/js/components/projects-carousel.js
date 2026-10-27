
import { ProjectCard } from "./project-card.js";

export function ProjectsCarousel(projects, texts) {
    if (!projects.length) {
        return "";
    }

    return `
        <div class="projects-carousel">

            <div class="projects-carousel__viewport">
                <div class="projects-carousel__track">
                    ${projects
                        .map(project => `
                            <div class="projects-carousel__slide">
                                ${ProjectCard(project, texts)}
                            </div>
                        `)
                        .join("")}
                </div>
            </div>

            <div class="projects-carousel__controls">

                <button
                    class="projects-carousel__button"
                    type="button"
                    data-carousel-prev
                    aria-label="${texts.previousProject}"
                >
                    ←
                </button>

                <div class="projects-carousel__indicators">
                    ${projects
                        .map((_, index) => `
                            <button
                                class="projects-carousel__indicator ${
                                    index === 0 ? "is-active" : ""
                                }"
                                type="button"
                                data-carousel-indicator="${index}"
                                aria-label="${texts.goToProject} ${index + 1}"
                            ></button>
                        `)
                        .join("")}
                </div>

                <button
                    class="projects-carousel__button"
                    type="button"
                    data-carousel-next
                    aria-label="${texts.nextProject}"
                >
                    →
                </button>

            </div>

        </div>
    `;
}
