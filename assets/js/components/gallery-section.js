import { GalleryCard } from "./gallery-card.js";

export function GallerySection(project) {
    return `
        <section class="gallery">
            <h2 class="gallery__title">
                Galeria
            </h2>

            <div class="gallery__grid">
                ${project.gallery.map(GalleryCard).join("")}
            </div>
        </section>
    `;
}