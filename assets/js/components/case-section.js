export function CaseSection({ title, content }) {
    return `
        <section class="case-section">
            <h2 class="case-section__title">
                ${title}
            </h2>

            <p class="case-section__content">
                ${content}
            </p>
        </section>
    `;
}