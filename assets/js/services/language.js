
export function getLanguage() {
    return localStorage.getItem("portfolio-language") || "pt";
}

export function initializeLanguageToggle() {
    const button = document.querySelector("[data-language-toggle]");

    if (!button) return;

    button.addEventListener("click", () => {
        const currentLanguage = getLanguage();
        const nextLanguage = currentLanguage === "pt" ? "en" : "pt";

        localStorage.setItem("portfolio-language", nextLanguage);

        window.location.reload();
    });
}
