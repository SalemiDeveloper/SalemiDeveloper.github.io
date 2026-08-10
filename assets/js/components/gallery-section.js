import { GalleryCard } from "./gallery-card.js";

export function GallerySection(project) {
    return `
        <section class="gallery">
            <h2 class="gallery__title">
                Demosntração da Aplicação
            </h2>
            <p>Infelizmente a RAWG está passando por instabilidades, então o vídeo da demonstração de cadastro de jogo com debounce vai ter que esperar um pouco.</p>
            <div class="gallery__grid">
                ${project.gallery.map(GalleryCard).join("")}
            </div>
        </section>
    `;
}