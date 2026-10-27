
export async function getProjects(language = "pt") {
    const response = await fetch(`assets/data/${language}/projects.json`);

    if (!response.ok) {
        throw new Error(`Não foi possível carregar os projetos em ${language}.`);
    }

    return await response.json();
}
