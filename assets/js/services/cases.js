export async function getCase(slug) {

    const response = await fetch("./assets/data/cases.json");

    const cases = await response.json();

    return cases.find(project => project.slug === slug);

}