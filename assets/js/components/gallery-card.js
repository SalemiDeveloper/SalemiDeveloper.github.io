export function GalleryCard(item) {
    return `
        <article class="gallery-card">
            <img
                src="${item.image}"
                alt="${item.title}"
                class="gallery-card__image"
            >

            <div class="gallery-card__content">
                <h3 class="gallery-card__title">
                    ${item.title}
                </h3>

                <p class="gallery-card__description">
                    ${item.description}
                </p>
            </div>
        </article>
    `;
}