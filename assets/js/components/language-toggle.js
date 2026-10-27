
export function LanguageToggle(language) {
    const isPortuguese = language === "pt";
    const nextLanguage = isPortuguese ? "en" : "pt";

    return `
        <button
            class="language-toggle"
            type="button"
            data-language-toggle
            aria-label="${isPortuguese ? "Switch to English" : "Mudar para português"}"
            title="${isPortuguese ? "Switch to English" : "Mudar para português"}"
        >
            ${nextLanguage.toUpperCase()}
        </button>
    `;
}
