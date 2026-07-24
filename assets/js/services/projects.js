// Responsabilidade do arquivo: Lê o projects.json e fornece dados.

export async function getProjects() {
    const response = await fetch("assets/data/projects.json");

    return await response.json();
}