
import { TechnologyGroup } from "./technologies-group.js";

export function TechnologySection(project, texts) {
    return `
        <section class="technology">
            <h2 class="technology__title">
                ${texts.technologies}
            </h2>

            <div class="technology__grid">

                ${TechnologyGroup({
                    title: texts.backend,
                    technologies: project.technologies.backend
                })}

                ${TechnologyGroup({
                    title: texts.frontend,
                    technologies: project.technologies.frontend
                })}

                ${TechnologyGroup({
                    title: texts.database,
                    technologies: project.technologies.database
                })}

                ${TechnologyGroup({
                    title: texts.architecture,
                    technologies: project.technologies.architeture
                })}

                ${TechnologyGroup({
                    title: texts.quality,
                    technologies: project.technologies.quality
                })}

                ${TechnologyGroup({
                    title: texts.integrations,
                    technologies: project.technologies.integrations
                })}
            </div>
        </section>
    `;
}
