export function ContributionSection(project, texts) {
    return `
        <section class="contributions">
            <h2 class="contributions__title">
                ${texts.mainContributions}
            </h2>

            <ul class="contributions__list">
                ${project.contributions
                    .map(contribution => `
                        <li>
                            ${contribution}
                        </li>
                    `).join("")}
            </ul>
        </section>
    `;
}