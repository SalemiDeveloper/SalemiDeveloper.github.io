export function initializeSkills() {
    const categories = document.querySelectorAll(".skills__category");
    const contents = document.querySelectorAll(".skills__items");

    if (!categories.length || !contents.length) {
        return;
    }

    categories.forEach(category => {
        category.addEventListener("click", () => {
            const selectedCategory = category.dataset.category;

            categories.forEach(item => {
                item.classList.remove("is-active");
            });

            contents.forEach(content => {
                content.classList.remove("is-active");
            });

            category.classList.add("is-active");

            const selectedContent = document.querySelector(
                `[data-category-content="${selectedCategory}"]`
            );

            selectedContent?.classList.add("is-active");
        });
    });
}