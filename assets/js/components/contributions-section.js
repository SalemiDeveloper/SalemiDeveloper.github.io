export function ContributionSection(project) {
    return `
        <section class="contributions">
            <h2 class="contributions__title">
                Principais Contribuições
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