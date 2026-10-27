const translations = {
    pt: {
        profile: () => import("../../data/pt/profile.js"),
        about: () => import("../../data/pt/about.js"),
        skills: () => import("../../data/pt/skills.js"),
        contact: () => import("../../data/pt/contact.js"),
        footer: () => import("../../data/pt/footer.js"),
        projects: () => import("../../data/pt/projects.json", {
            with: { type: "json" }
        }),
        cases: () => import("../../data/pt/cases.json", {
            with: { type: "json" }
        })
    },

    en: {
        profile: () => import("../../data/en/profile.js"),
        about: () => import("../../data/en/about.js"),
        skills: () => import("../../data/en/skills.js"),
        contact: () => import("../../data/en/contact.js"),
        footer: () => import("../../data/en/footer.js"),
        projects: () => import("../../data/en/projects.json", {
            with: { type: "json" }
        }),
        cases: () => import("../../data/en/cases.json", {
            with: { type: "json" }
        })
    }
};

export async function loadTranslations(language = "pt") {
    const selectedTranslations = translations[language] ?? translations.pt;

    const entries = await Promise.all(
        Object.entries(selectedTranslations).map(async ([key, loader]) => {
            const module = await loader();

            return [
                key,
                module.default ?? module
            ];
        })
    );

    return Object.fromEntries(entries);
}