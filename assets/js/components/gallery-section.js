import { GalleryCard } from "./gallery-card.js";

export function GallerySection(project) {
    return `
        <section class="gallery">
            <h2 class="gallery__title">
                Demosntração da Aplicação
            </h2>

            <p class="gallery__notice">
                Infelizmente a RAWG API aparentemente está fora do ar. Enquanto desenvolvia o projeto estava ok, porém no final de semana que eu ia gravar a aplicação funcionando já era tarde demais.
            </p>

            <div class="gallery__grid">
                ${project.gallery.map(GalleryCard).join("")}
            </div>
        </section>
    `;
}