export function SectionTitle({eyebrow, title}) {
    return `
        <div class="section-header">
            <span class="section-header__eyebrow">
                ${eyebrow}
            </span>

            <h2 class="section-header__title">
                ${title}
            </h2>
        </div>
    `;
}