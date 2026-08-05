export function OverviewItem({ title, content }) {
    return `
        <article class="overview-item">
            <h2 class="overview-item__title">
                ${title}
            </h2>

            <p class="overview-item__content">
                ${content}
            </p>
        </article>
    `;
}