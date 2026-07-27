export function InfoCard({ title, items }) {
    return `
        <article class="info-card">
            <h3 class="info-card__title">
                ${title}
            </h3>

            <ul class="info-card__list">
                ${items.map(item => `
                        <li class="info-card__item">
                            ${item}
                        </li>
                    `).join("")}
            </ul>
        </article>
    `;
}