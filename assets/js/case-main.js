import { getCase } from "./services/cases.js";

async function render() {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("project");
    const project = await getCase(slug);
    console.log(project);
}

render();