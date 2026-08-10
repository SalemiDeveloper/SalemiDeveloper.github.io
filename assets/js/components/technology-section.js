import { TechnologyGroup } from "./technologies-group.js";

export function TechnologySection(project) {
    return `
        <section class="technology">
            <h2 class="technology__title">
                Tecnologias
            </h2>

            <div class="technology__grid">

                ${TechnologyGroup({
                    title: "Backend",
                    technologies: project.technologies.backend
                })}

                ${TechnologyGroup({
                    title: "Frontend",
                    technologies: project.technologies.frontend
                })}

                ${TechnologyGroup({
                    title: "Banco de Dados",
                    technologies: project.technologies.database
                })}

                ${TechnologyGroup({
                    title: "Arquitetura",
                    technologies: project.technologies.architeture
                })}

                ${TechnologyGroup({
                    title: "Qualidade",
                    technologies: project.technologies.quality
                })}

                ${TechnologyGroup({
                    title: "Integrações",
                    technologies: project.technologies.integrations
                })}
            </div>
        </section>
    `;
    
}