import { ProjectCard } from "./project-card.js";

export function ProjectsCarousel(projects) {
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
                                ${ProjectCard(project)}
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
                    aria-label="Projeto anterior"
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
                                aria-label="Ir para o projeto ${index + 1}"
                            ></button>
                        `)
                        .join("")}
                </div>

                <button
                    class="projects-carousel__button"
                    type="button"
                    data-carousel-next
                    aria-label="Próximo projeto"
                >
                    →
                </button>

            </div>

        </div>
    `;
}