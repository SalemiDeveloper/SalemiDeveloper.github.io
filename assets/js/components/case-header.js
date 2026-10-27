import { Button } from "./button.js";

export function CaseHeader(project, texts) {
    return `
        <header class="case-header">
            <span class="case-header__eyebrow">
                ${texts.caseStudy}
            </span>

            <h1 class="case-header__title">
                ${project.title}
            </h1>

            <p class="case-header__description">
                ${project.description}
            </p>

            <div class="case-header__actions">
                ${Button({
                    text: texts.github,
                    href: project.github,
                    target: "_blank"
                })}

                ${
                    project.video
                        ? Button({
                            text: texts.watchVideo,
                            href: project.video,
                            variant: "secondary",
                            target: "_blank"
                        })
                        : ""
                }
            </div>
        </header>
    `;
}