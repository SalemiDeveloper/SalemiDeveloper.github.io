export function ArchitectureCard(layer) {
    return `
        <article class="architecture-card">
            <h3 class="architecture-card__title">
                ${layer.title}
            </h3>

            <p class="architecture-card__description">
                ${layer.description}
            </p>
        </article>
    `;
}