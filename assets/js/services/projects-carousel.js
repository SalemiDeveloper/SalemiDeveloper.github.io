export function initializeProjectsCarousel() {
    const toggle = document.querySelector("[data-projects-toggle]");
    const wrapper = document.querySelector("[data-projects-carousel]");

    if (!toggle || !wrapper) {
        return;
    }

    toggle.addEventListener("click", () => {
        const isVisible = wrapper.classList.toggle("is-visible");

        toggle.classList.toggle("is-active", isVisible);
        toggle.innerHTML = isVisible ? `Ocultar projetos <span>↓</span>` : `Ver mais projetos <span>↓</span>`;

        if (isVisible) {
            initializeCarousel(wrapper);
        }
    });
}

function initializeCarousel(wrapper) {
    const track = wrapper.querySelector(".projects-carousel__track");
    const slides = wrapper.querySelectorAll(".projects-carousel__slide");
    const previous = wrapper.querySelector("[data-carousel-prev]");
    const next = wrapper.querySelector("[data-carousel-next]");
    const indicators = wrapper.querySelectorAll("[data-carousel-indicator]");

    if (!track || !slides.length) {
        return;
    }

    let currentIndex = 0;

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        previous.disabled = currentIndex === 0;
        next.disabled = currentIndex === slides.length - 1;

        indicators.forEach((indicator, index) => {
            indicator.classList.toggle("is-active", index === currentIndex);
        });
    }

    previous.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    next.addEventListener("click", () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    updateCarousel();
}