import { GalleryCard } from "./gallery-card.js";

export function GallerySection(project) {
    return `
        <section class="gallery">

            <h2 class="gallery__title">
                Demonstração da Aplicação
            </h2>

            <div class="gallery__video">
                <iframe
                    src="https://www.youtube.com/embed/hL-82-Rqu-4?si=lm9FgO50dW68kAej"
                    title="Demonstração do Game Tracker"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>

            <div class="gallery__grid">
                ${project.gallery.map(GalleryCard).join("")}
            </div>

        </section>
    `;
}